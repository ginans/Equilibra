const { Respuesta } = require('../../models/foro/Respuesta');
const jwt = require("jsonwebtoken");

const createRespuesta = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Obtener token desde las cabeceras
    const decoded = jwt.verify(token, process.env.JWT_SECRET_PROFESSION); // Verificar token
    const userProfessionalId = decoded.id;
    const { contenido, preguntaId } = req.body;

    if (!contenido || !preguntaId) {
      return res.status(400).json({ message: 'Contenido y preguntaId son requeridos' });
    }

    const nuevaRespuesta = await Respuesta.create({
      contenido,
      preguntaId,
      userProfessionalId,
    });

    res.status(201).json(nuevaRespuesta);
  } catch (error) {
    console.error("Error al crear la respuesta:", error);
    res.status(500).json({ error: 'Error al crear la respuesta' });
  }
};

module.exports = { createRespuesta };

