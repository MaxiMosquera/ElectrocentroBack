import express from "express";

const router = express.Router();

import {createUser,getAllUsers,getUserById,updateUser,deleteUser,registerUser,loginUser,requestPasswordReset,resetPassword} from "../controllers/usuarios.controller.js";
import { validateToken } from '../middlewares/logger.js';






router.put("/:id",updateUser);
router.delete("/:id",deleteUser);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', requestPasswordReset);
router.post('/reset-password/:token', resetPassword);

router.post('/admin', validateToken, createUser);
router.get("/admin",validateToken,getAllUsers);
router.get("/admin/:id",validateToken,getUserById);
router.put("/admin/:id",validateToken,updateUser);

export default router;