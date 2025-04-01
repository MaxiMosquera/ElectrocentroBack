import { sendMail } from '../services/mail.service.js';
import { generateToken } from '../utils/token.js';
import dotenv from "dotenv"

dotenv.config();

// 📩 Recuperar contraseña
export const resetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const token = generateToken(email, '15m'); 
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
    const html = `
      <h2>Recuperación de contraseña</h2>
      <p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
      <a href="${resetLink}">${resetLink}</a>
    `;
    await sendMail(email, 'Recuperar Contraseña', html);
    res.json({ message: 'Correo de recuperación enviado' });
  } catch (error) {
    res.status(500).json({ error: 'Error enviando correo' });
  }
};

// 📩 Confirmación de registro
export const confirmRegister = async (req, res) => {
  const { email } = req.body;
  try {
    const token = generateToken(email, '24h')
    const confirmLink = `${process.env.FRONTEND_URL}/confirm?token=${token}`;
    const html = `
      <h2>Confirmación de Registro</h2>
      <p>Bienvenido! Confirma tu registro haciendo clic en el siguiente enlace:</p>
      <a href="${confirmLink}">${confirmLink}</a>
    `;
    await sendMail(email, 'Confirmación de Registro', html);
    res.json({ message: 'Correo de confirmación enviado' });
  } catch (error) {
    res.status(500).json({ error: 'Error enviando correo' });
  }
};

// 📩 Formulario de contacto
export const contactForm = async (req, res) => {
  const { email, name, message } = req.body;
  console.log(req.body, "body")
  try {
    const html = `
      <h2>Consulta desde el formulario</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
    `;
    await sendMail(process.env.CORPORATE_EMAIL, 'Nueva Consulta', html);
    res.json({ message: 'Consulta enviada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error enviando correo' });
  }
};
