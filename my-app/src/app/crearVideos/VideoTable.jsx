import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/crearVideos/VideoTable.module.scss'; // Importa el SCSS como módulo

const CATEGORIES = ['Cardio', 'Fuerza', 'Tren inferior', 'Tren superior', 'Adulto Mayor', 'Flexibilidad', 'Embarazadas'];

const VideoTable = () => {
  const [videos, setVideos] = useState([]);
  const [editVideo, setEditVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(7); // Puedes ajustar el número de videos por página
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [videoToDelete, setVideoToDelete] = useState(null);

  useEffect(() => {
    // Obtener todos los videos cuando el componente se monta
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error al obtener videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleDelete = (id) => {
    setVideoToDelete(id);
    setShowConfirmDialog(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/videos/${videoToDelete}`);
      setVideos(videos.filter(video => video.id !== videoToDelete));
      setShowConfirmDialog(false);
      setVideoToDelete(null);
    } catch (error) {
      console.error('Error al eliminar el video:', error);
    }
  };

  const cancelDelete = () => {
    setShowConfirmDialog(false);
    setVideoToDelete(null);
  };

  const handleEdit = (video) => {
    setEditVideo(video);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/videos/${editVideo.id}`, editVideo);
      setVideos(videos.map(v => (v.id === editVideo.id ? editVideo : v)));
      setEditVideo(null);
    } catch (error) {
      console.error('Error al actualizar el video:', error);
    }
  };

  // Calcular los índices de los videos que deben mostrarse en la página actual
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice().reverse().slice(indexOfFirstVideo, indexOfLastVideo);

  // Cambiar la página actual
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Crear los números de página para la paginación
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(videos.length / videosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles['video-table']}>
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
          {currentVideos.map(video => (
            <React.Fragment key={video.id}>
              <tr>
                <td>{video.title}</td>
                <td>{video.content}</td>
                <td><img src={video.image} alt={video.title} width="100" /></td>
                <td>{video.video_url}</td>
                <td>{video.category}</td>
                <td className={styles.actions}>
                  <button onClick={() => handleEdit(video)}>Editar</button>
                  <button onClick={() => handleDelete(video.id)}>Eliminar</button>
                </td>
              </tr>
              {editVideo && editVideo.id === video.id && (
                <tr>
                  <td colSpan="6">
                    <form onSubmit={handleUpdate} className={styles['edit-form']}>
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
      <div className={styles.pagination}>
        <ul>
          {pageNumbers.map(number => (
            <li key={number}>
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Diálogo de Confirmación */}
      {showConfirmDialog && (
        <div className={styles['confirm-dialog-overlay']}>
          <div className={styles['confirm-dialog']}>
            <h2>Confirmar Eliminación</h2>
            <p>¿Estás seguro de que quieres eliminar este video?</p>
            <button onClick={confirmDelete}>Sí, Eliminar</button>
            <button onClick={cancelDelete}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTable;
