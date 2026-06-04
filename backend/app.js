import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { getConnection } from "./config/db.js";
import { config } from "./config/env.js";

import modelosRoutes from "./routes/modelos.routes.js";
import solicitudesRoutes from "./routes/solicitudes.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import certificadosRoutes from "./routes/certificados.routes.js";

dotenv.config();

/* 🔥 CREAR APP */
const app = express();

/* 🔥 MIDDLEWARES */
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

/* 🔥 RUTAS (AQUÍ TODAS) */
app.use("/api/auth", authRoutes);
app.use("/api/modelos", modelosRoutes);
app.use("/api/solicitudes", solicitudesRoutes);
app.use(
  "/api/certificados",
  certificadosRoutes
);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PORT:", process.env.DB_PORT);

/* 🔥 TEST DB */
const testDB = async () => {
  try {
    const conn = await getConnection();
    await conn.query("SELECT 1");
    console.log("Conectado a MySQL");
  } catch (error) {
    console.log("Error de conexión:", error);
  }
};

testDB();

/* 🔥 HEALTH */
app.get("/health", async (req, res) => {
  try {
    const conn = await getConnection();
    await conn.query("SELECT 1");

    res.json({
      status: "OK",
      database: "connected",
    });
  } catch (error) {
    res.status(500).json({
      status: "ERROR",
      database: "disconnected",
    });
  }
});

app.use(errorHandler);

/* 🔥 SERVIDOR */
const PORT = config.port || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});