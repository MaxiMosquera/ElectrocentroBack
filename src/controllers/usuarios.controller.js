import {Usuario} from "../models/index.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Op } from 'sequelize';
import nodemailer from "nodemailer";

const  SECRET_KEY = process.env.JWT_SECRET

export const getAllUsers = async (res) => {
    try {
        const users = await Usuario.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios." });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "Usuario no encontrado." });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el usuario." });
    }
};

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el usuario." });
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "Usuario no encontrado." });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el usuario." });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.json({ message: "Usuario eliminado correctamente." });
        } else {
            res.status(404).json({ error: "Usuario no encontrado." });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el usuario." });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Buscar usuario por email
      const user = await Usuario.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      // Comparar contraseña
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Contraseña incorrecta' });
      }
  
      const token = jwt.sign(
        { id: user.id, email: user.email, rol: user.rol }, 
        SECRET_KEY, 
        { expiresIn: '1h' }
      );
  
      // Enviar respuesta con usuario, token y descuento si aplica
      res.json({
        message: 'Inicio de sesión exitoso',
        user: {
          id: user.id,
          nombre: user.nombre,
          email: user.email,
          rol: user.rol
        },
        token,
        descuento: user.rol === 3 ? "Aplica descuento especial" : "Sin descuento", // Agregamos el descuento solo si el rol es 3
        accesoAdmin: user.rol === 2 // Booleano para permitir acceso a admin en el frontend
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al iniciar sesión' });
    }
  };

  export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    
  
    try {
      // Verificar si el email ya está registrado
      const existingUser = await Usuario.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'El correo ya está registrado' });
      }
  
      // Encriptar la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Crear el nuevo usuario
      const newUser = await Usuario.create({
        name,
        email,
        password: hashedPassword,
      });
  
      // Generar un token JWT
      const token = jwt.sign(
        { id: newUser.id, email: newUser.email },
        SECRET_KEY,
        { expiresIn: '1h' } // Cambiar según sea necesario
      );
      res.status(201).json({
        message: 'Usuario registrado exitosamente',
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          rol: newUser.rol,
          
        },
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al registrar usuario' });
    }
  };

  export const requestPasswordReset = async (req, res) => {
    const { email } = req.body;
  
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'No existe una cuenta con este correo' });
  
        // Generar token de recuperación con expiracion de 1 hs
        const token = crypto.randomBytes(32).toString('hex');
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000; // 1 hora
        await user.save();
  
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });
  
        const resetUrl = `http://localhost:5173/reset-password/user/${token}`;
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "Recuperación de contraseña",
            html: `<p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
                   <a href="${resetUrl}">${resetUrl}</a>
                   <p>Este enlace expira en 1 hora.</p>`
        });
  
        res.json({ message: 'Correo de recuperación enviado' });
  
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
  };

  export const resetPassword = async (req, res) => {
    const { token } = req.params;  //traemos el toquen de la resetURL
    const { password } = req.body;
  
    try {
        const user = await User.findOne({ where: { resetToken: token, resetTokenExpiration: { [Op.gt]: Date.now() } } });
        if (!user) return res.status(400).json({ message: 'Token inválido o expirado' });
  
        user.password = await bcrypt.hash(password, 10);
        user.resetToken = null;
        user.resetTokenExpiration = null;
        await user.save();
  
        res.json({ message: 'Contraseña actualizada correctamente' });
  
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
  };

  export const actualizarRolUsuario = async (req, res) => {
    const { id, nuevoRol } = req.body;

    try {
        // Verificar si el usuario autenticado es administrador
        const admin = await Usuario.findByPk(req.user.id);
        if (!admin || admin.rol !== 2) {
            return res.status(403).json({ error: "Acceso denegado." });
        }

        // Buscar usuario a modificar
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

        usuario.rol = nuevoRol;
        await usuario.save();

        res.json({ message: "✅ Rol actualizado correctamente." });

    } catch (error) {
        res.status(500).json({ error: "❌ Error al actualizar el rol del usuario." });
    }
};