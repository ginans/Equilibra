// server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Configura middleware
app.use(cors());
app.use(bodyParser.json());

// Configura la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'galeriaEntrenamiento'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

// Rutas
// Obtener todos los videos
app.get('/api/videos', (req, res) => {
  db.query('SELECT * FROM galeriaEntrenamiento', (err, results) => {
    if (err) {
      console.error('Error al obtener videos:', err);
      res.status(500).json({ error: 'Error al obtener videos' });
      return;
    }
    res.json(results);
  });
});

// Agregar un nuevo video
app.post('/api/videos', (req, res) => {
  const { title, content, image, video_url, category } = req.body;
  const query = 'INSERT INTO galeriaEntrenamiento (title, content, image, video_url, category) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [title, content, image, video_url, category], (err, result) => {
    if (err) {
      console.error('Error al agregar video:', err);
      res.status(500).json({ error: 'Error al agregar video' });
      return;
    }
    res.json({ id: result.insertId, title, content, image, video_url, category });
  });
});

// Eliminar un video
app.delete('/api/videos/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM galeriaEntrenamiento WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar video:', err);
      res.status(500).json({ error: 'Error al eliminar video' });
      return;
    }
    res.sendStatus(204); // No Content
  });
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

// Actualizar un video
app.put('/api/videos/:id', (req, res) => {
  const { id } = req.params;
  const { title, content, image, video_url, category } = req.body;
  const query = `
    UPDATE galeriaEntrenamiento
    SET title = ?, content = ?, image = ?, video_url = ?, category = ?
    WHERE id = ?
  `;
  db.query(query, [title, content, image, video_url, category, id], (err, result) => {
    if (err) {
      console.error('Error al actualizar video:', err);
      res.status(500).json({ error: 'Error al actualizar video' });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Video no encontrado' });
      return;
    }
    res.json({ id, title, content, image, video_url, category });
  });
});

