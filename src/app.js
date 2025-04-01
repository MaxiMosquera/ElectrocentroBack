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

dotenv.config();

// Access Token de prueba de MercadoPago (ajusta si corresponde)
const ACCESS_TOKEN_PRUEBA = "APP_USR-3893618639484885-032819-f5d40aa4d44244f6b557749b68264668-1985392653";

// Crear instancia de Express
const app = express();

// Middlewares
app.use(cors({
  origin: "http://localhost:5173"
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

// ----------------------------------------------------
// Webhook (ejemplo de manejo de notificaciones MP)
// ----------------------------------------------------
app.post("/webhook", async (req, res) => {
  try {
    // 1. Lee la firma enviada en el header
    const signature = req.headers["x-mercadopago-signature"];
    // Si tuvieras configurado un rawBody, lo usarías, en caso contrario usamos el body serializado
    const rawBody = req.rawBody || JSON.stringify(req.body);

    // 2. Calcula la firma esperada con tu secret (si usas MP_WEBHOOK_SECRET en tu .env)
    const expectedSignature = crypto
      .createHmac("sha256", process.env.MP_WEBHOOK_SECRET || "SUPER_SECRET")
      .update(rawBody)
      .digest("hex");

    // 3. (Opcional) Compara ambas firmas para validar la notificación
    /*
    if (signature !== expectedSignature) {
      console.error("Firma inválida:", { signature, expectedSignature });
      return res.status(401).send("Firma inválida: la notificación no es legítima");
    }
    */

    // 4. Procesa la notificación recibida
    const notification = req.body;

    let metadata;
    let paymentId;

    // Caso 1: Notificación de pago aprobado
    if (
      notification.action === "payment.updated" &&
      notification.data.status === "approved"
    ) {
      paymentId = String(notification.data.id);
      metadata = notification.data.metadata;

      // Si la metadata no está presente, consultamos la API de pagos
      if (!metadata) {
        try {
          const response = await axios.get(
            `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=${ACCESS_TOKEN_PRUEBA}`
          );
          const paymentDetails = response.data;
          metadata = paymentDetails.metadata;
        } catch (error) {
          console.error("Error al obtener detalles del pago:", error);
        }
      }
    }
    // Caso 2: Notificación de orden de comerciante
    else if (notification.type === "topic_merchant_order_wh") {
      const merchantOrderId = notification.id;
      try {
        const merchantOrderResponse = await axios.get(
          `https://api.mercadopago.com/merchant_orders/${merchantOrderId}?access_token=${ACCESS_TOKEN_PRUEBA}`
        );
        const merchantOrderDetails = merchantOrderResponse.data;
        console.log("Detalles de la orden de comerciante:", merchantOrderDetails);

        if (
          merchantOrderDetails.payments &&
          merchantOrderDetails.payments.length > 0
        ) {
          paymentId = String(merchantOrderDetails.payments[0].id);
          const paymentResponse = await axios.get(
            `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=${ACCESS_TOKEN_PRUEBA}`
          );
          const paymentDetails = paymentResponse.data;
          console.log("Detalles completos del pago:", paymentDetails);
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

    // 5. Si ya tenemos el paymentId y la metadata, procesamos la orden y sus productos
    if (paymentId && metadata) {
      const orderData = {
        paymentId, // Guardamos como string
        user_id: metadata.customer.id,
        finalPrice: parseFloat(metadata.total),
        discountPercentage: 0,
        status: "paid",
      };

      // Verificamos si ya existe una orden con ese paymentId
      const existingOrder = await Orden.findOne({ where: { paymentId } });
      console.log("Orden existente:", existingOrder);

      if (!existingOrder) {
        const newOrder = await Orden.create(orderData);
        console.log("Nueva orden creada:", newOrder);

        if (metadata.items && Array.isArray(metadata.items)) {
          for (const item of metadata.items) {
            let productType;
            if (item.category === "motores") {
              productType = "motor";
            } else if (item.category === "reductores") {
              productType = "reductor";
            } else if (item.category === "convertidores") {
              productType = "convertidor";
            } else if (item.category === "arranquesuave") {
              productType = "arranqueSuave";
            } else {
              productType = item.category;
            }

            await OrderProduct.create({
              order_id: newOrder.id,
              product_id: item.id,
              product_type: productType,
              quantity: item.quantity,
              unitPrice: item.price
            });
          }
          console.log("Detalles de productos insertados en order_products.");
        } else {
          console.log("No hay items en la metadata para crear order products.");
        }
      } else {
        console.log("La orden ya existe. Se puede actualizar si es necesario.");
      }
    } else {
      console.log("No se pudo obtener la metadata necesaria o el pago no está aprobado.");
    }

    // 6. Responde con 200 para confirmar la recepción del webhook
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
