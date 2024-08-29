const { Pregunta } = require('../../models/foro/Pregunta');
const { modelUserClient } = require('../../models/userClient/userClient');

const getPreguntas = async (req, res) => {
  try {
    const preguntas = await Pregunta.findAll({
      include: {
        model: modelUserClient,
        as: 'usuario',
        attributes: ['userName'],
      },
    });
    res.json(preguntas);
  } catch (error) {
    console.error('Error en getPreguntas:', error);
    res.status(500).json({ error: 'Error al obtener las preguntas' });
  }
};

module.exports = { getPreguntas };


