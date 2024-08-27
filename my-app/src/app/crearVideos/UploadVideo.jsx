import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/crearVideos/UploadVideo.scss';

//useState se utiliza para crear y gestionar el estado del componente. 
//Cada estado representa un campo del formulario o una lista de categorías.
const UploadVideo = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  //title, content, image, videoUrl, selectedCategory son estados 
  //que representan el valor de los campos del formulario.

 
  //useEffect se usa para ejecutar efectos secundarios en el componente. 
  //En este caso, se usa para cargar las categorías cuando el componente se monta por primera vez.
  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = ['Cardio', 'Fuerza', 'Tren inferior', 'Tren superior', 'Adulto Mayor', 'Flexibilidad', 'Embarazadas'];
      // La función fetchCategories simula la obtención de categorías (en un caso real, podrías hacer 
      //   una solicitud HTTP para obtener estos datos).
      setCategories(fetchedCategories);
      setSelectedCategory(fetchedCategories[0]); // Establece una categoría por defecto
      // setCategories establece las categorías disponibles, y setSelectedCategory 
      // selecciona la primera categoría por defecto.
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/videos', {
        title,
        content,
        image,
        video_url: videoUrl,
        category: selectedCategory
      });

      alert('Video cargado con éxito');
      // Resetear formulario después de la carga
      setTitle('');
      setContent('');
      setImage('');
      setVideoUrl('');
      setSelectedCategory(categories[0]);
    } catch (error) {
      console.error('Error al cargar el video:', error);
      alert('Error al cargar el video. Inténtalo de nuevo.');
    }
    // handleSubmit es la función que maneja el envío del formulario.
    // e.preventDefault() evita que la página se recargue al enviar el formulario.
    // axios.post envía una solicitud POST al servidor con los datos del formulario.
    // Si la solicitud es exitosa, muestra una alerta y restablece los campos del formulario.
    // Si ocurre un error, muestra una alerta y registra el error en la consola.
  };

  return (
    <div className="upload-video">
      <h1>Cargar Video</h1>
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