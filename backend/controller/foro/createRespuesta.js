const Respuesta = require('../models/Respuesta');

const createRespuesta = async (req, res) => {
  try {
    const { contenido, preguntaId } = req.body;
    const nuevaRespuesta = await Respuesta.create({
      contenido,
      preguntaId,
      userProfessionalId: req.user.id,  // El ID del usuario autenticado
    });
    res.status(201).json(nuevaRespuesta);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la respuesta', error });
  }
};

module.exports = createRespuesta;
