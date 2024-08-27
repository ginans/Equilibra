// src/components/VideoTable.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/crearVideos/VideoTable.scss';

const CATEGORIES = ['Cardio', 'Fuerza', 'Tren inferior', 'Tren superior', 'Adulto Mayor', 'Flexibilidad', 'Embarazadas'];
// CATEGORIES es una constante que define las categorías disponibles para los videos. 
// Se usa en el formulario de edición para permitir seleccionar una categoría.

const VideoTable = () => {
  const [videos, setVideos] = useState([]);
  const [editVideo, setEditVideo] = useState(null);

  useEffect(() => {
    // Obtener todos los videos cuando el componente se monta
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error al obtener videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/videos/${id}`);
      setVideos(videos.filter(video => video.id !== id));
    } catch (error) {
      console.error('Error al eliminar el video:', error);
    }
  };

  const handleEdit = (video) => {
    setEditVideo(video);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/videos/${editVideo.id}`, editVideo);
      setVideos(videos.map(v => (v.id === editVideo.id ? editVideo : v)));
      setEditVideo(null);
    } catch (error) {
      console.error('Error al actualizar el video:', error);
    }
  };

  return (
    <div className="video-table">
      <h1>Galería de Videos</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>ID del Video</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {videos.slice().reverse().map(video => (
            <React.Fragment key={video.id}>
              <tr>
                <td>{video.title}</td>
                <td>{video.content}</td>
                <td><img src={video.image} alt={video.title} width="100" /></td>
                <td>{video.video_url}</td>
                <td>{video.category}</td>
                <td className="actions">
                  <button onClick={() => handleEdit(video)}>Editar</button>
                  <button onClick={() => handleDelete(video.id)}>Eliminar</button>
                </td>
              </tr>
              {editVideo && editVideo.id === video.id && (
                <tr>
                  <td colSpan="6">
                    <form onSubmit={handleUpdate} className="edit-form">
                      <h2>Editar Video</h2>
                      <div>
                        <label>Título</label>
                        <input
                          type="text"
                          value={editVideo.title}
                          onChange={(e) => setEditVideo({ ...editVideo, title: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label>Descripción</label>
                        <textarea
                          value={editVideo.content}
                          onChange={(e) => setEditVideo({ ...editVideo, content: e.target.value })}
                        />
                      </div>
                      <div>
                        <label>Imagen (URL)</label>
                        <input
                          type="text"
                          value={editVideo.image}
                          onChange={(e) => setEditVideo({ ...editVideo, image: e.target.value })}
                        />
                      </div>
                      <div>
                        <label>ID del Video</label>
                        <input
                          type="text"
                          value={editVideo.video_url}
                          onChange={(e) => setEditVideo({ ...editVideo, video_url: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label>Categoría</label>
                        <select
                          value={editVideo.category}
                          onChange={(e) => setEditVideo({ ...editVideo, category: e.target.value })}
                          required
                        >
                          {CATEGORIES.map(category => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button type="submit">Actualizar</button>
                      <button type="button" onClick={() => setEditVideo(null)}>Cancelar</button>
                    </form>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideoTable;
