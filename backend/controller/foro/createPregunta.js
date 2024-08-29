require('dotenv').config();
const jwt = require("jsonwebtoken");
const Pregunta = require('../../models/foro/Pregunta');
const { modelUserClient } = require('../../models/userClient/userClient');

const createPregunta = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Obtener el token desde las cabeceras
    const decoded = jwt.verify(token, process.env.JWT_SECRET_CLIENT); // Verificar el token
    const userId = decoded.id; // Obtener el ID del usuario
    const { titulo, contenido } = req.body;

    // Validar que los datos de la pregunta estén presentes
    if (!titulo || !contenido) {
      return res.status(400).json({ message: 'Título y contenido son requeridos' });
    }

    const userClient = await modelUserClient.findByPk(userId);
    if (!userClient) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const nuevaPregunta = await Pregunta.create({
      titulo,
      contenido,
      userClientId: userId,
    });

    res.status(201).json(nuevaPregunta);
  } catch (error) {
    console.error("Error al crear la pregunta:", error);
    res.status(500).json({ message: 'Error al crear la pregunta', error });
  }
};

module.exports = { createPregunta };


