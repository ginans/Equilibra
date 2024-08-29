const { Likes } = require('../../models/foro/Like');

const toggleLike = async (req, res) => {
    try {
        const { preguntaId, userId } = req.body;
        const likeExistente = await Likes.findOne({ where: { preguntaId,  userClientId:userId, userProfessionalId:userId } });

        if (likeExistente) {
            await likeExistente.destroy();
            res.status(200).json({ mensaje: 'Like eliminado.' });
        } else {
            const nuevoLike = await Likes.create({ preguntaId, userClientId:userId });
            res.status(201).json(nuevoLike);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al manejar el like.' });
    }
};

module.exports = toggleLike;
