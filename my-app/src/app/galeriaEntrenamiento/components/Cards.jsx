import React, { useState } from 'react';
import '../../../styles/galeriaEntrenamiento/Cards.css'; 
import FiltroBar from './Filtro'; 

import image1 from '../../galeriaEntrenamiento/images/cardio1.jpg';
import image2 from '../../galeriaEntrenamiento/images/trenSuperior1.jpg';
import image3 from '../../galeriaEntrenamiento/images/trenInferior1.jpg';
import image4 from '../../galeriaEntrenamiento/images/fuerza.jpg';
import image5 from '../../galeriaEntrenamiento/images/trenSuperior2.jpg';
import image6 from '../../galeriaEntrenamiento/images/trenSuperior3.jpg';
import image7 from '../../galeriaEntrenamiento/images/adultoMayor1.jpg';
import image8 from '../../galeriaEntrenamiento/images/adultoMayor2.jpg';
import image9 from '../../galeriaEntrenamiento/images/adultoMayor3.jpg';
import image10 from '../../galeriaEntrenamiento/images/adultoMayor4.jpg';
import image11 from '../../galeriaEntrenamiento/images/cardio2.jpg';
import image12 from '../../galeriaEntrenamiento/images/cardio3.jpg';
import image13 from '../../galeriaEntrenamiento/images/cardio4.jpg';
import image22 from '../../galeriaEntrenamiento/images/cardio5.jpg';
import image14 from '../../galeriaEntrenamiento/images/fuerza2.jpg';
import image15 from '../../galeriaEntrenamiento/images/fuerza3.jpg';
import image16 from '../../galeriaEntrenamiento/images/fuerza4.jpg';
import image17 from '../../galeriaEntrenamiento/images/fuerza5.jpg';
import image18 from '../../galeriaEntrenamiento/images/trenInferior2.jpg';
import image19 from '../../galeriaEntrenamiento/images/trenInferior3.jpg';
import image20 from '../../galeriaEntrenamiento/images/trenInferior4.jpg';
import image21 from '../../galeriaEntrenamiento/images/trenInferior5.jpg';
import logo from '../../landingPage/images/logo.png';


const Card = ({ title, image, text, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
  // Un componente funcional que recibe title, image, y onClick como props. 
  // Renderiza un div con una clase CSS card, una imagen con la clase card-image 
  // y un encabezado h3 con el título. Cuando se hace clic en el div, se llama a 
  // la función onClick.
};

const Cards = () => {//Un componente funcional que maneja la lógica y el estado de las tarjetas.
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todo');
  // Usa el hook useState para manejar el video seleccionado (selectedVideo) y la categoría seleccionada 
  // (selectedCategory). Inicialmente, selectedVideo es null y selectedCategory es 'Todo'.

  const cardData = [
    { title: 'Cardio 20 minutos', text: 'Ejercicios para quemar grasa',image: image1, videoId: 'ksi-c8YgClY', category: 'Cardio' },
    { title: 'Cardio 15 minutos', text: 'Rutina intensa para adelgaza y quemar grasa',image: image11, videoId: 'uSD5IxmEQdI', category: 'Cardio' },
    { title: 'Cardio 30 minutos', text: 'Rutina sin saltos sin impacto pero de alta intensidad',image: image12, videoId: 'yOH-T9uRzpQ', category: 'Cardio' },
    { title: 'Cardio 20 minutos', text: 'CARDIO HIIT para quemar muchas calorias en poco tiempo',image: image13, videoId: 'jrpanz6Xxhs', category: 'Cardio' },
    { title: 'Cardio 20 minutos', text: 'Ejercicios para quemar grasa',image: image22, videoId: 's3iC2mB0HU8', category: 'Cardio' },

    { title: 'Fuerza 30 minutos', text:'Rutina de fuerza para mujeres',image: image4, videoId: 'rTvIPpU_-dU', category: 'Fuerza' },
    { title: 'Fuerza 30 minutos', text:'Rutina de fuerza para mujeres',image: image14, videoId: '2eSlP_3y2po', category: 'Fuerza' },
    { title: 'Fuerza 30 minutos', text:'Rutina de fuerza para mujeres',image: image15, videoId: 'Mpd2JCGhVRA', category: 'Fuerza' },
    { title: 'Fuerza 30 minutos', text:'Rutina de fuerza para mujeres',image: image16, videoId: '5qp20nfPlUA', category: 'Fuerza' },
    { title: 'Fuerza 30 minutos', text:'Rutina de fuerza para mujeres',image: image17, videoId: '6lCeNlSoonk', category: 'Fuerza' },

    { title: 'Parte inferior 20 minutos', text:'Rutina bajo impacto', image: image3, videoId: 'b7vbGgjmNJA', category: 'Tren inferior' },
    { title: 'Parte inferior 20 minutos', text:'Rutina bajo impacto', image: image18, videoId: 'Du9WQTZVet4', category: 'Tren inferior' },
    { title: 'Parte inferior 20 minutos', text:'Rutina bajo impacto', image: image19, videoId: 'E8LcNwTotK4', category: 'Tren inferior' },
    { title: 'Parte inferior 20 minutos', text:'Rutina bajo impacto', image: image20, videoId: 'i1I_Rpw6zAA', category: 'Tren inferior' },
    { title: 'Parte inferior 20 minutos', text:'Rutina bajo impacto', image: image21, videoId: 'A7pMiSGMezk', category: 'Tren inferior' },

    { title: 'Parte superior 25 minutos', text:'Rutina para ganar fuerza en casa', image: image2, videoId: 'hydNsnnOnow', category: 'Tren superior' },
    { title: 'Parte superior 20 minutos', text:'7 ejercicios de fortalecimiento', image: image5, videoId: 'QMg6Wt0XPQU', category: 'Tren superior' },
    { title: 'Parte superior 20 minutos', text:'Rutina para principiantes', image: image6, videoId: 'q-GibjArMY8', category: 'Tren superior' },
    { title: 'Adulto Mayor 60 minutos', text:'', image: image7, videoId: '8gBBtUWdDcY', category: 'Adulto Mayor' },
    { title: 'Adulto Mayor 60 minutos', text:'', image: image8, videoId: 'dLAmsVnNNQU', category: 'Adulto Mayor' },
    { title: 'Adulto Mayor 50 minutos', text:'', image: image9, videoId: 'Yt-7YCNyNvA', category: 'Adulto Mayor' },
    { title: 'Adulto Mayor 20 minutos', text:'', image: image10, videoId: 'etY6yH_blQs', category: 'Adulto Mayor' }
    // Define los datos de las tarjetas: Un array de objetos que contiene la información de cada tarjeta, 
    // incluyendo título, texto, imagen, ID del video y categoría.
  ];

  const handleCardClick = (videoId) => {
    setSelectedVideo(videoId);
  };
  // Maneja el clic en una tarjeta: Una función que actualiza el estado selectedVideo con el videoId 
  // de la tarjeta clicada.

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };
  // Maneja el cambio de filtro: Una función que actualiza el estado selectedCategory con la categoría 
  // seleccionada en la barra de filtros.

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };
  // Maneja el cierre del video: Una función que restablece el estado selectedVideo a null, ocultando el 
  // video actualmente seleccionado.

  const filteredCardData = selectedCategory === 'Todo'
    ? cardData
    : cardData.filter(card => card.category === selectedCategory);
    // Filtra las tarjetas según la categoría seleccionada: Crea un array de tarjetas filtradas basado 
    // en la categoría seleccionada. Si la categoría es 'Todo', se muestran todas las tarjetas; de lo 
    // contrario, se filtran según la categoría seleccionada.

  return (
    <div>
      <FiltroBar
        selectedCategory={selectedCategory}
        onFilterChange={handleFilterChange}
      />
      {/* Renderiza el componente: Devuelve el JSX que representa la UI. Incluye el componente FiltroBar 
      pasando selectedCategory y handleFilterChange como props. */}

      <div className="cards-container">
        {filteredCardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            image={card.image}
            onClick={() => handleCardClick(card.videoId)}
          />
        ))}
      </div>
      {/* Renderiza las tarjetas filtradas: Mapea filteredCardData para crear un componente Card para 
      cada objeto en el array. Se pasa key, title, text, image, y onClick como props a cada Card. */}

      {selectedVideo && (
        <div className="video-overlay">
          <div className="video-modal">
            <button className="close-button" onClick={handleCloseVideo}>X</button>
            <img src={logo} alt="Company Logo" className="logo-image" />
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
  // Muestra el video seleccionado (si hay uno): Si hay un video seleccionado, se renderiza una superposición 
  // (video-overlay) con un modal que contiene un botón de cierre, el logo de la empresa y un iframe para el video 
  // de YouTube. El iframe utiliza el videoId para cargar el video adecuado.
};

export default Cards;
