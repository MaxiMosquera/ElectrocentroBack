import express from 'express';
import { getOrderByPaymentId, getOrdersByUserId } from '../controllers/Ordenes.controller.js';



const router = express.Router();

router.get("/:paymentId", getOrderByPaymentId);
router.get("/getOrder/:userId", getOrdersByUserId);

export default router;