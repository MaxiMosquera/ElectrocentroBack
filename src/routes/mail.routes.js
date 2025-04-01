import express from 'express';
import { resetPassword, confirmRegister, contactForm } from '../controllers/mail.controller.js';

const router = express.Router();

router.post('/reset-password', resetPassword);
router.post('/confirm-register', confirmRegister);
router.post('/contact', contactForm);

export default router;
