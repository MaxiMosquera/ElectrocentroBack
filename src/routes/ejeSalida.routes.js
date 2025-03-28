import express from "express";
import { getAllEjeSalida, getEjeSalida } from "../controllers/ejeSalida.controller.js";

const router = express.Router();

router.get("/", getAllEjeSalida);
router.get("/:id", getEjeSalida);

export default router;