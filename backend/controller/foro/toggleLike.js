const { Likes } = require('../../models/foro/Likes');
const { Pregunta } = require('../../models/foro/Pregunta');
const { Respuesta } = require('../../models/foro/Respuesta');
const jwt = require("jsonwebtoken");

const toggleLike = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Obtener token desde las cabeceras
    const decoded = jwt.verify(token, process.env.JWT_SECRET_CLIENT); // Verificar token
    const userClientId = decoded.id; // Asumimos que es un cliente en este ejemplo

    const { preguntaId, respuestaId } = req.body;

    if (!preguntaId && !respuestaId) {
      return res.status(400).json({ message: 'Se requiere preguntaId o respuestaId' });
    }

    // Buscar si el like ya existe
    const existingLike = await Likes.findOne({
      where: {
        userClientId,
        preguntaId,
        respuestaId,
      },
    });

    if (existingLike) {
      await existingLike.destroy();

      if (preguntaId) {
        await Pregunta.decrement('likes', { by: 1, where: { id: preguntaId } });
      }
      if (respuestaId) {
        await Respuesta.decrement('likes', { by: 1, where: { id: respuestaId } });
      }

      return res.status(200).json({ message: 'Like eliminado' });
    } else {
      await Likes.create({ userClientId, preguntaId, respuestaId });

      if (preguntaId) {
        await Pregunta.increment('likes', { by: 1, where: { id: preguntaId } });
      }
      if (respuestaId) {
        await Respuesta.increment('likes', { by: 1, where: { id: respuestaId } });
      }

      return res.status(201).json({ message: 'Like agregado' });
    }
  } catch (error) {
    console.error("Error al manejar el like:", error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { toggleLike };
