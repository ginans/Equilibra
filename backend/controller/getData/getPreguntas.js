const { Pregunta } = require('../../models/foro/Pregunta');

const getPreguntas = async (req, res) => {
    try {
        const preguntas = await Pregunta.findAll({
            include: [{ model: UserClient }, { model: Respuesta }]
        });
        res.status(200).json(preguntas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las preguntas.' });
    }
};

module.exports = getPreguntas;

