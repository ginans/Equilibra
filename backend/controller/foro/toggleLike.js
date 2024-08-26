const { Like } = require('../models/foro');

const toggleLike = async (req, res) => {
    try {
        const { preguntaId, userId } = req.body;
        const likeExistente = await Like.findOne({ where: { preguntaId, userId } });

        if (likeExistente) {
            await likeExistente.destroy();
            res.status(200).json({ mensaje: 'Like eliminado.' });
        } else {
            const nuevoLike = await Like.create({ preguntaId, userId });
            res.status(201).json(nuevoLike);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al manejar el like.' });
    }
};

module.exports = toggleLike;
