import express from "express";

const router = express.Router();
import { createMotor, getAllMotores, getMotorById,updateMotor,deleteMotor} from "../controllers/motores.controller.js";

// Obtener todos los motores
router.get('/', getAllMotores);

// Obtener un motor por ID
router.get('/:id', getMotorById);

// Crear un nuevo motor
router.post('/', createMotor);

// Actualizar un motor por ID
router.put('/:id',updateMotor);

// Eliminar un motor por ID
router.delete('/:id',deleteMotor);


export default router;