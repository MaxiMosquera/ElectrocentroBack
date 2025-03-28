import express from "express";
import { getAllFijacionSalida, getFijacionSalida } from "../controllers/fijacionSalida.controller.js";

const router = express.Router();

router.get("/", getAllFijacionSalida);
router.get("/:id", getFijacionSalida);

export default router;