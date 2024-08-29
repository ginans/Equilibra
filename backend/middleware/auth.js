const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: 'Acceso denegado. No se encontró el token.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_CLIENT);
    req.user = decoded; // Almacenar los datos del usuario en la request
    next();
  } catch (error) {
    console.error("Error en la autenticación:", error);
    return res.status(401).json({ message: 'Autenticación fallida.' });
  }
};

module.exports = authMiddleware;
