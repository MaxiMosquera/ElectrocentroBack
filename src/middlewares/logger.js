
import jwt from 'jsonwebtoken';

export const validateToken = (req, res, next) => {
  console.log("→ [MIDDLEWARE] en auth");
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.error("→ [MIDDLEWARE] Token no proporcionado o con formato incorrecto");
    return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado o formato incorrecto.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    console.log("→ [MIDDLEWARE] Usuario autenticado:", req.user);
    
    console.log("→ [MIDDLEWARE] Pasando a next()");
    next(); // 
  } catch (error) {
    console.error('→ [MIDDLEWARE] Error al verificar el JWT:', error.message);
    return res.status(401).json({ error: 'Token inválido o expirado.' });
  }
};
