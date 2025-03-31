import express from "express";
import morgan from "morgan";
import cors from "cors";
import sequelize from "../src/dbconfig.js";
import http from "http";
import dotenv from "dotenv";
import motorRouter from "../src/routes/motores.routes.js"
import reductorRouter from  "../src/routes/reductores.routes.js"
import usuarioRouter from "../src/routes/usuarios.routes.js"
import bcrypt from "bcrypt";
import Usuario from "./models/usuarios.model.js";
import fijacion_salidaRouter from "../src/routes/fijacionSalida.routes.js"
import eje_salidaRouter from "../src/routes/ejeSalida.routes.js"
import tipo_entradaRouter from "../src/routes/tipoEntrada.routes.js"
import pagosRouter from "../src/routes/pagos.routes.js"
import arranqueSuaveRouter from "../src/routes/arranquesuave.routes.js"
import convertidorRouter from "../src/routes/convertidor.routes.js"
import mailRouter from "../src/routes/mail.routes.js"

import crypto from "crypto";
import axios from "axios";
import { read } from "fs";
dotenv.config();

const app = express();

const ACCESS_TOKEN_PRUEBA = "APP_USR-3893618639484885-032819-f5d40aa4d44244f6b557749b68264668-1985392653"

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use(morgan("dev"));  

app.use((err, req, res, next) => {
    console.error("→ [GLOBAL ERROR HANDLER]", err);
    res.status(500).json({ error: "Algo salió mal en el servidor." });
  });

  //rutas

  app.post("/webhook", async (req, res) => {
    try {
      // 1. Lee la firma enviada en el header
      const signature = req.headers["x-mercadopago-signature"];
      // Utiliza req.rawBody para calcular la firma (si no está, se serializa req.body)
      const rawBody = req.rawBody || JSON.stringify(req.body);
  
      // 2. Calcula la firma esperada utilizando HMAC-SHA256 y la clave secreta
      const expectedSignature = crypto
        .createHmac("sha256", process.env.MP_WEBHOOK_SECRET)
        .update(rawBody)
        .digest("hex");
  
      // 3. (Opcional) Compara ambas firmas para validar la notificación
      /* if (signature !== expectedSignature) {
        console.error("Firma inválida:", { signature, expectedSignature });
        return res.status(401).send("Firma inválida: la notificación no es legítima");
      } */
  
      // 4. Procesa la notificación recibida
      const notification = req.body;
      console.log("Notificación recibida:", notification);
  
      let metadata;
      let paymentId;
  
      // Caso 1: Notificación de pago
      if (
        notification.action === "payment.updated" &&
        notification.data.status === "approved"
      ) {
        paymentId = notification.data.id;
        metadata = notification.data.metadata;
  
        // Si la metadata no está presente, consultamos directamente la API de pagos
        if (!metadata) {
          try {
            const response = await axios.get(
              `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=${ACCESS_TOKEN_PRUEBA}`
            );
            const paymentDetails = response.data;
            console.log("Detalles completos del pago:", paymentDetails);
            metadata = paymentDetails.metadata;
          } catch (error) {
            console.error("Error al obtener detalles del pago:", error);
          }
        }
      }
      // Caso 2: Notificación de orden de comerciante
      else if (notification.type === "topic_merchant_order_wh") {
        // Utilizamos el ID de la notificación como el ID de la orden de comerciante
        const merchantOrderId = notification.id;
        try {
          // Consultamos los detalles de la orden de comerciante
          const merchantOrderResponse = await axios.get(
            `https://api.mercadopago.com/merchant_orders/${merchantOrderId}?access_token=${ACCESS_TOKEN_PRUEBA}`
          );
          const merchantOrderDetails = merchantOrderResponse.data;
          console.log("Detalles de la orden de comerciante:", merchantOrderDetails);
  
          // Si la orden tiene pagos asociados, usamos el primero para obtener la metadata
          if (
            merchantOrderDetails.payments &&
            merchantOrderDetails.payments.length > 0
          ) {
            paymentId = merchantOrderDetails.payments[0].id;
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
  
      // 5. Si ya tenemos el paymentId y la metadata, procesamos la orden
      if (paymentId && metadata) {
        console.log("Pago aprobado. paymentId:", paymentId);
        console.log("Metadata recibida:", metadata);
  
        // Verifica si ya existe una orden con ese paymentId para evitar duplicados
        /* const existingOrder = await Order.findOne({ where: { paymentId } });
        if (!existingOrder) {
          // Crea la orden utilizando la metadata obtenida
          const newOrder = await Order.create({
            paymentId,
            customer: metadata.customer,
            items: metadata.items,
            total: metadata.total,
            orderDate: metadata.orderDate,
            status: "paid",
          });
          console.log("Orden creada:", newOrder);
        } else {
          console.log("La orden ya existe. Se puede actualizar si es necesario.");
        } */
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
  
  app.use("/api/motores",motorRouter)
  app.use("/api/reductores",reductorRouter)
  app.use("/api/usuarios",usuarioRouter)
  app.use("/api/fijaciones-salida",fijacion_salidaRouter)
  app.use("/api/ejes-salida",eje_salidaRouter)
  app.use("/api/tipos-entrada",tipo_entradaRouter)
  app.use("/api/pagos",pagosRouter)
  app.use("/api/arranquesuave",arranqueSuaveRouter)
  app.use("/api/convertidores",convertidorRouter)
  app.use("/api/mail",mailRouter)
// 🔹 Función para precargar un administrador
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
              rol: 2, // Rol de administrador
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

  // Iniciar el servidor

sequelize.sync({ alter: true }).then(async() => {
    await precargarAdmin(); // 🟢 Precargar admin antes de iniciar el servidor
    const PORT = process.env.PORT || 3000;
    const httpsServer = http.createServer(app);
    httpsServer.listen(PORT , () => {
      
      console.log(`Servidor HTTPS está escuchando en el puerto ${PORT} http://localhost:3000`);
    }); 
     
    }).catch(error => {
      console.error('Unable to synchronize the models:', error);
    });  