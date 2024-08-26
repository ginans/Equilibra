const Pregunta = require('../models/Pregunta');

const createPregunta = async (req, res) => {
  try {
    const { titulo, contenido } = req.body;
    const nuevaPregunta = await Pregunta.create({
      titulo,
      contenido,
      userClientId: req.user.id,  // El ID del usuario autenticado
    });
    res.status(201).json(nuevaPregunta);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la pregunta', error });
  }
};

module.exports = createPregunta;
