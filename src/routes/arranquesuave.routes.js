import express from "express";
import { getAllArranqueSuave, getArranqueSuave, createArranqueSuave, updateArranqueSuave, deleteArranqueSuave } from "../controllers/arranquesuave.controller.js";

const router = express.Router();

router.get("/", getAllArranqueSuave);
router.get("/:id", getArranqueSuave);
router.post("/", createArranqueSuave);
router.put("/:id", updateArranqueSuave);
router.delete("/:id", deleteArranqueSuave);

export default router;
