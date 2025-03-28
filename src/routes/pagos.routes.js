import express from 'express';

import { createPreference } from '../controllers/pagos.controller.js'

const router = express.Router();

router.post("/create-preference", createPreference);

export default router;