const Video = require('../../models/galeriaEntrenamiento/videoModel');

exports.getVideos = async (req, res) => {
    try {
      const videos = await Video.findAll();
      res.json(videos);
    } catch (err) {
      console.error('Error al obtener videos:', err);
      res.status(500).json({ error: 'Error al obtener videos' });
    }
  };
  
  // Agregar un nuevo video
  exports.createVideo = async (req, res) => {
    try {
      const { title, content, image, video_url, category } = req.body;
      const video = await Video.create({ title, content, image, video_url, category });
      res.status(201).json(video);
    } catch (err) {
      console.error('Error al agregar video:', err);
      res.status(500).json({ error: 'Error al agregar video' });
    }
  };
  
  // Eliminar un video
  exports.deleteVideo = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Video.destroy({ where: { id } });
      if (result === 0) {
        res.status(404).json({ error: 'Video no encontrado' });
      } else {
        res.sendStatus(204); // No Content
      }
    } catch (err) {
      console.error('Error al eliminar video:', err);
      res.status(500).json({ error: 'Error al eliminar video' });
    }
  };
  
  // Actualizar un video
  exports.updateVideo = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, content, image, video_url, category } = req.body;
      const [updated] = await Video.update({ title, content, image, video_url, category }, { where: { id } });
      if (updated === 0) {
        res.status(404).json({ error: 'Video no encontrado' });
      } else {
        const updatedVideo = await Video.findByPk(id);
        res.json(updatedVideo);
      }
    } catch (err) {
      console.error('Error al actualizar video:', err);
      res.status(500).json({ error: 'Error al actualizar video' });
    }
  };