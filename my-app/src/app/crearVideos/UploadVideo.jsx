import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/crearVideos/UploadVideo.module.scss'; // Nota la extensión .module.scss

const UploadVideo = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = ['Cardio', 'Fuerza', 'Tren inferior', 'Tren superior', 'Adulto Mayor', 'Flexibilidad', 'Embarazadas'];
      setCategories(fetchedCategories);
      setSelectedCategory(fetchedCategories[0]);
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/api/videos', {
        title,
        content,
        image,
        video_url: videoUrl,
        category: selectedCategory
      });

      setMessage('Video cargado con éxito');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);

      setTitle('');
      setContent('');
      setImage('');
      setVideoUrl('');
      setSelectedCategory(categories[0]);
    } catch (error) {
      console.error('Error al cargar el video:', error);
      setMessage('Error al cargar el video. Inténtalo de nuevo.');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  return (
    <div className={styles.uploadVideo}>
      <h1>Cargar Video</h1>
      {showMessage && (
        <>
          <div className={styles.overlay}></div>
          <div className={styles.messageBox}>
            {message}
          </div>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Descripción</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Imagen (URL)</label>
          <input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="videoUrl">ID del Video</label>
          <input
            id="videoUrl"
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Cargar Video</button>
      </form>
    </div>
  );
};

export default UploadVideo;
