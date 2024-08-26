const { db } = require("../../database/dataBase");

const getAllArticles = async (req, res) => {
  try {
    const articles = await db.query('SELECT * FROM articles', { type: db.QueryTypes.SELECT });
    res.json(articles);
  } catch (err) {
    console.error("Error al obtener los artículos:", err);
    res.status(500).send("Error al obtener los artículos");
  }
};

const getArticleById = async (req, res) => {
  const id = req.params.id;
  try {
    const articles = await db.query('SELECT * FROM articles WHERE id = ?', {
      replacements: [id],
      type: db.QueryTypes.SELECT
    });
    if (articles.length === 0) {
      res.status(404).send("Artículo no encontrado");
      return;
    }
    res.json(articles[0]);
  } catch (err) {
    console.error("Error al obtener el artículo:", err);
    res.status(500).send("Error al obtener el artículo");
  }
};

const createArticle = async (req, res) => {
  const { title, content, image } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO articles (title, content, image) VALUES (?, ?, ?)',
      {
        replacements: [title, content, image],
        type: db.QueryTypes.INSERT
      }
    );
    res.status(201).json({ id: result[0], title, content, image });
  } catch (err) {
    console.error("Error inserting article:", err);
    res.status(500).send("Error inserting article");
  }
};

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle
};
