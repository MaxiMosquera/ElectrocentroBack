import express from 'express';

import { createPreference } from '../controllers/pagos.controller.js'
import { validateToken } from '../middlewares/logger.js';

const router = express.Router();

router.post("/create-preference",validateToken, createPreference);

export default router;