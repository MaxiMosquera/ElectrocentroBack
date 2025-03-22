
import express from "express";
import morgan from "morgan";
import cors from "cors";
import sequelize from "../src/dbconfig.js";
import http from "http";
import dotenv from "dotenv";
import motorRouter from "../src/routes/motores.routes.js"
import reductorRouter from  "../src/routes/reductores.routes.js"
import usuarioRouter from "../src/routes/usuarios.routes.js"
// Carga las variables de entorno desde el archivo .env
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
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



  // Iniciar el servidor

sequelize.sync({ alter: true }).then(() => {
  const PORT = process.env.PORT || 3000;
    const httpsServer = http.createServer( app);
    httpsServer.listen(PORT , () => {
      
      console.log(`Servidor HTTPS está escuchando en el puerto ${PORT} http://localhost:3000`);
    }); 
     
    }).catch(error => {
      console.error('Unable to synchronize the models:', error);
    });  