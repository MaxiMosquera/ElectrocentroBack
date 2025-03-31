import jwt from 'jsonwebtoken';

export const generateToken = (userEmail, expiresIn = '1h') => {
  return jwt.sign({ email: userEmail }, process.env.JWT_SECRET, { expiresIn });
};
