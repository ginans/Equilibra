// controllers/noticiasController.js

const Noticia = require('../../models/landingPage/noticiasModel');

// Controlador para manejar la solicitud de noticias
const getNoticias = async (req, res) => {
  try {
    const noticias = await Noticia.findAll({
      order: [['id', 'DESC']],
      limit: 3,
    });
    res.json(noticias);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving noticias' });
  }
};

module.exports = {
  getNoticias
};
