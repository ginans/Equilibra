const { db } = require('../../database/dataBase'); 


const getAllNoticias = async (req, res) => {
  try {
    const noticias = await db.query('SELECT * FROM noticias', {
      type: db.QueryTypes.SELECT
    });
    res.json(noticias);
  } catch (err) {
    console.error("Error al obtener las noticias:", err);
    res.status(500).send("Error al obtener las noticias");
  }
};

const getNoticiaById = async (req, res) => {
  const id = req.params.id;
  try {
    const noticias = await db.query('SELECT * FROM noticias WHERE id = ?', {
      replacements: [id],
      type: db.QueryTypes.SELECT
    });
    if (noticias.length === 0) {
      res.status(404).send("Noticia no encontrada");
      return;
    }
    res.json(noticias[0]);
  } catch (err) {
    console.error("Error al obtener la noticia:", err);
    res.status(500).send("Error al obtener la noticia");
  }
};

const createNoticia = async (req, res) => {
  const { title, url, description, imagen } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO noticias (title, url, description, image) VALUES (?, ?, ?, ?)',
      {
        replacements: [title, url, description, imagen],
        type: db.QueryTypes.INSERT
      }
    );
    res.status(201).json({ id: result[0], title, url, description, imagen });
  } catch (err) {
    console.error("Error al insertar la noticia:", err);
    res.status(500).send("Error al insertar la noticia");
  }
};

module.exports = {
  getAllNoticias,
  getNoticiaById,
  createNoticia
};
