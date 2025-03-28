import express from "express";
import { getAllTipoEntrada, getTipoEntrada } from "../controllers/tipoEntrada.controller.js";

const router = express.Router();

router.get("/", getAllTipoEntrada);
router.get("/:id", getTipoEntrada);

export default router;

