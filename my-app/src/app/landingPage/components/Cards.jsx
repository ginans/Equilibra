import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; //Un hook para manejar la navegación programática.
import '../../../styles/landingPage/Cards.css'; 

// Importa las imágenes
import image1 from '../../landingPage/images/carousel1.jpg';
import image2 from '../../landingPage/images/carousel2.jfif';
import image3 from '../../landingPage/images/carousel3.jpg';

// Componente Card
const Card = ({ title, link, image }) => { //Recibe title, link e image como propiedades.
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(link)}>
      {/* Contiene la tarjeta y usa el evento onClick para navegar a la ruta proporcionada en link. */}
      <img
        src={image}
        alt={title}
        className="card-image"
        loading="lazy" // Carga diferida para mejorar el rendimiento
        onError={(e) => e.target.src = 'path/to/default/image.jpg'} // Imagen por defecto si falla la carga
      />
      {/* Muestra la imagen de la tarjeta. Tiene un alt para accesibilidad, loading="lazy" para cargar la 
      imagen de forma diferida y onError para manejar errores en la carga de la imagen. */}
      <h3>{title}</h3>
      {/* Muestra el título de la tarjeta. */}
    </div>
  );
};

Card.propTypes = {
  // Define los datos de las tarjetas con imágenes importadas y texto actualizado
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

const Cards = () => {
  // Define los datos de las tarjetas con imágenes importadas y texto actualizado
  const cardData = [ //Se crea una lista cardData que contiene la información de cada tarjeta: id, title, link, e image.
    { id: 1, title: 'Explora el mundo del fitness con nuestra guía completa', link: '/Noticias', image: image1 },
    { id: 2, title: 'Conoce los mejores consejos para una vida saludable', link: '/page2', image: image2 },
    { id: 3, title: 'Inspírate con historias de éxito en el entrenamiento', link: '/page3', image: image3 }
  ];

  return (
    // Contenedor que envuelve todas las tarjetas.
    <div className="cards-container">
      {cardData.map((card) => (
        <Card key={card.id} title={card.title} link={card.link} image={card.image} />
      ))}
    </div>
  );
};

export default Cards;