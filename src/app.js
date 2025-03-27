
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

dotenv.config();

const app = express();

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

  app.use("/api/motores",motorRouter)
  app.use("/api/reductores",reductorRouter)
  app.use("/api/usuarios",usuarioRouter)

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