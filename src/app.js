// server.js
import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import https from "https";
import fs from "fs";
import crypto from "crypto";
import axios from "axios";
import bcrypt from "bcrypt";
import { read } from "fs"; // Si no se usa, puedes eliminarlo

// Configuración de la base de datos
import sequelize from "../src/dbconfig.js";

// Modelos
import Usuario from "./models/usuarios.model.js";
import Orden from "./models/orden.model.js";
import OrderProduct from "./models/orderProducts.model.js";

// Rutas
import motorRouter from "../src/routes/motores.routes.js";
import reductorRouter from "../src/routes/reductores.routes.js";
import usuarioRouter from "../src/routes/usuarios.routes.js";
import fijacion_salidaRouter from "../src/routes/fijacionSalida.routes.js";
import eje_salidaRouter from "../src/routes/ejeSalida.routes.js";
import tipo_entradaRouter from "../src/routes/tipoEntrada.routes.js";
import pagosRouter from "../src/routes/pagos.routes.js";
import arranqueSuaveRouter from "../src/routes/arranquesuave.routes.js";
import convertidorRouter from "../src/routes/convertidor.routes.js";
import mailRouter from "../src/routes/mail.routes.js";
import OrdenesRouter from "./routes/Ordenes.routes.js";
import { purchaseConfirmation } from "./controllers/mail.controller.js";

dotenv.config();

// Access Token de prueba de MercadoPago (ajusta si corresponde)
const ACCESS_TOKEN_PRUEBA = "APP_USR-3893618639484885-032819-f5d40aa4d44244f6b557749b68264668-1985392653";

// Crear instancia de Express
const app = express();

// Middlewares
const allowedOrigins = [
  "http://localhost:5173",
  "http://electrocentro.s3-website-us-east-1.amazonaws.com"
];

app.use(cors({
  origin: (origin, callback) => {
    // Permitir solicitudes sin origen (por ejemplo, desde herramientas como Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  }
}));
app.use(express.json());
app.use(morgan("dev"));

// Manejador global de errores
app.use((err, req, res, next) => {
  console.error("→ [GLOBAL ERROR HANDLER]", err);
  res.status(500).json({ error: "Algo salió mal en el servidor." });
});

// ----------------------------------------------------
// Rutas de la API
// ----------------------------------------------------
app.use("/api/motores", motorRouter);
app.use("/api/reductores", reductorRouter);
app.use("/api/usuarios", usuarioRouter);
app.use("/api/fijaciones-salida", fijacion_salidaRouter);
app.use("/api/ejes-salida", eje_salidaRouter);
app.use("/api/tipos-entrada", tipo_entradaRouter);
app.use("/api/pagos", pagosRouter);
app.use("/api/arranquesuave", arranqueSuaveRouter);
app.use("/api/convertidores", convertidorRouter);
app.use("/api/mail", mailRouter);
app.use("/api/ordenes", OrdenesRouter);

app.post("/webhook", async (req, res) => {
  try {
    // 1. Leer la firma enviada en el header
    const signature = req.headers["x-mercadopago-signature"];
    const rawBody = req.rawBody || JSON.stringify(req.body);

    // 2. Calcular la firma esperada (opcional)
    const expectedSignature = crypto
      .createHmac("sha256", process.env.MP_WEBHOOK_SECRET || "SUPER_SECRET")
      .update(rawBody)
      .digest("hex");

    /* Opcional: verificar la firma
    if (signature !== expectedSignature) {
      console.error("Firma inválida:", { signature, expectedSignature });
      return res.status(401).send("Firma inválida: la notificación no es legítima");
    }
    */

    // 3. Procesar la notificación recibida
    const notification = req.body;

    let metadata;
    let paymentId;

    // Caso 1: Pago aprobado
    if (
      notification.action === "payment.updated" &&
      notification.data.status === "approved"
    ) {
      paymentId = String(notification.data.id);
      metadata = notification.data.metadata;

      if (!metadata) {
        try {
          const response = await axios.get(
            `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=${process.env.ACCESS_TOKEN_PRUEBA}`
          );
          const paymentDetails = response.data;
          metadata = paymentDetails.metadata;
        } catch (error) {
          console.error("Error al obtener detalles del pago:", error);
        }
      }
    }
    // Caso 2: Orden de comerciante
    else if (notification.type === "topic_merchant_order_wh") {
      const merchantOrderId = notification.id;
      try {
        const merchantOrderResponse = await axios.get(
          `https://api.mercadopago.com/merchant_orders/${merchantOrderId}?access_token=${process.env.ACCESS_TOKEN_PRUEBA}`
        );
        const merchantOrderDetails = merchantOrderResponse.data;

        if (
          merchantOrderDetails.payments &&
          merchantOrderDetails.payments.length > 0
        ) {
          paymentId = String(merchantOrderDetails.payments[0].id);
          const paymentResponse = await axios.get(
            `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=${process.env.ACCESS_TOKEN_PRUEBA}`
          );
          const paymentDetails = paymentResponse.data;
          metadata = paymentDetails.metadata;
       
        } else {
          console.log("La orden no tiene pagos asociados.");
        }
      } catch (error) {
        console.error("Error al obtener detalles de la orden:", error);
      }
    } else {
      console.log("Notificación recibida pero no corresponde a un pago aprobado ni a una orden válida.");
    }

    // 4. Si tenemos paymentId y metadata, procesamos la orden
    if (paymentId && metadata) {
      const orderData = {
        paymentId, // Guardado como string
        user_id: metadata.customer.id,
        finalPrice: parseFloat(metadata.total),
        discountPercentage: 0,
        status: "paid",
      };

      // Verificar si ya existe la orden
      const existingOrder = await Orden.findOne({ where: { paymentId } });
 

      if (!existingOrder) {
        const newOrder = await Orden.create(orderData);
    

        if (metadata.items && Array.isArray(metadata.items)) {
          for (const item of metadata.items) {
            let productType;
            if (item.category === "motores") productType = "motor";
            else if (item.category === "reductores") productType = "reductor";
            else if (item.category === "convertidores") productType = "convertidor";
            else if (item.category === "arranqueSuave") productType = "arranqueSuave";
            else productType = item.category;

            await OrderProduct.create({
              order_id: newOrder.id,
              product_id: item.id,
              product_type: productType,
              quantity: item.quantity,
              unitPrice: item.price,
            });
          }
        
        } else {
          console.log("No hay items en la metadata para crear order products.");
        }

        // 5. Preparar los datos para enviar el correo de confirmación

        // Usar datos de metadata.customer o, si faltan, consultar al modelo User
        let customerName = metadata.customer.name;
        let customerEmail = metadata.customer.email;
        if ((!customerName || !customerEmail) && metadata.customer.id) {
          const userData = await User.findOne({ where: { id: metadata.customer.id } });
          if (userData) {
            customerName = userData.name;
            customerEmail = userData.email;
          }
        }

        // Armar el detalle de los ítems en HTML (por ejemplo, una tabla)
        let itemsHtml = "";
        if (metadata.items && Array.isArray(metadata.items)) {
          for (const item of metadata.items) {
            itemsHtml += `
              <tr>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
              </tr>
            `;
          }
        }

        const orderDetails = `
          <p><strong>Fecha de Orden:</strong> ${new Date(metadata.order_date).toLocaleString()}</p>
          <table border="1" cellpadding="5" cellspacing="0">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>
          <p><strong>Total:</strong> $${metadata.total}</p>
        `;

        // 6. Enviar el correo de confirmación usando la función purchaseConfirmation.
        // Para reutilizarla, simulamos un objeto req con los datos necesarios.
        const emailReq = {
          body: {
            name: customerName,
            email: customerEmail,
            orderDetails,
          },
        };
        // Nota: purchaseConfirmation enviará la respuesta final. Por ello, retornamos después.
        await purchaseConfirmation(emailReq, res);
        return;
      } else {
        console.log("La orden ya existe. Se puede actualizar si es necesario.");
      }
    } else {
      console.log("No se pudo obtener la metadata necesaria o el pago no está aprobado.");
    }

    return res.sendStatus(200);
  } catch (error) {
    console.error("Error en el webhook:", error);
    return res.sendStatus(500);
  }
});

// ----------------------------------------------------
// Función para precargar un administrador
// ----------------------------------------------------
const precargarAdmin = async () => {
  try {
    const adminExistente = await Usuario.findOne({ where: { rol: 2 } });
    if (!adminExistente) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      await Usuario.create({
        name: "Admin",
        email: "admin@example.com",
        password: hashedPassword,
        telefono: "123456789",
        rol: 2, // Rol administrador
        address: "Oficina Central"
      });
      console.log("✅ Administrador precargado con éxito.");
    } else {
      console.log("⚠️ Ya existe un administrador, no es necesario precargar.");
    }
  } catch (error) {
    console.error("❌ Error al precargar el administrador:", error);
  }
};

// ----------------------------------------------------
// Sincronizar la base de datos y levantar servidor
// ----------------------------------------------------
sequelize
  .sync({ alter: true }) // Ajusta según necesidades (alter, force, etc.)
  .then(async () => {
    // Precarga lo que necesites (Admin, datos iniciales, etc.)
    await precargarAdmin();

    // Determina si estamos en producción o en desarrollo
    const isProduction = process.env.NODE_ENV === "production";

    if (isProduction) {
      // En producción se levanta HTTPS usando los certificados
      // Ajusta nombres/rutas de tus archivos de certificados
      const privateKey = fs.readFileSync("./certificados/private.key", "utf8");
      const certificate = fs.readFileSync("./certificados/certificate.crt", "utf8");

      const credentials = {
        key: privateKey,
        cert: certificate
        // si usas CA Bundle: ca: fs.readFileSync("./ca_bundle.crt", "utf8")
      };

      const httpsServer = https.createServer(credentials, app);
      httpsServer.listen(443, () => {
        console.log("Servidor HTTPS escuchando en el puerto 443");
      });
    } else {
      // En desarrollo se levanta HTTP normal
      const PORT = process.env.PORT || 3000;
      const httpServer = http.createServer(app);

      httpServer.listen(PORT, () => {
        console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
      });
    }
  })
  .catch((error) => {
    console.error("Unable to synchronize the models:", error);
  });
