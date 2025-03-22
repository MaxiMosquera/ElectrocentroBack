import express from "express";

const router = express.Router();

import { createReductor, getAllReductores, getReductorById, updateReductor, deleteReductor } from "../controllers/reductores.controller.js";


// Obtener todos los reductores
router.get('/', getAllReductores);

// Obtener un reductor por ID
router.get('/:id', getReductorById);

// Crear un nuevo reductor
router.post('/', createReductor);

// Actualizar un reductor por ID
router.put('/:id', updateReductor);

// Eliminar un reductor por ID
router.delete('/:id', deleteReductor);

export default router;