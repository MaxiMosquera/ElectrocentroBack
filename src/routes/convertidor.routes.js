import express from "express";
import { getAllConvertidores, getConvertidor, createConvertidor, updateConvertidor, deleteConvertidor } from "../controllers/convertidor.controller.js";

const router = express.Router();

router.get("/", getAllConvertidores);
router.get("/:id", getConvertidor);
router.post("/", createConvertidor);
router.put("/:id", updateConvertidor);
router.delete("/:id", deleteConvertidor);

export default router;
