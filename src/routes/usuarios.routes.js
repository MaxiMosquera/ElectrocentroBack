import express from "express";
import {createUser,getAllUsers,getUserById,updateUser,deleteUser,registerUser,loginUser,requestPasswordReset,resetPassword,actualizarRolUsuario} from "../controllers/usuarios.controller.js";
import { validateToken } from '../middlewares/logger.js';


const router = express.Router();

//rutas publicas

router.put("/:id",validateToken,updateUser);
router.delete("/:id",validateToken,deleteUser);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', requestPasswordReset);
router.post('/reset-password/:token', resetPassword);

//rutas protegidas
router.post('/admin', validateToken, createUser);
router.get("/admin/usuarios",validateToken,getAllUsers);
router.get("/admin/usuarios/:id",validateToken,getUserById);
router.put("/admin/actualizar/:id",validateToken,updateUser);
router.put("/admin/actualizar-rol/:id",validateToken,actualizarRolUsuario);

export default router;