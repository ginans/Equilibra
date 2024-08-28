import React, { useState, useEffect } from 'react';
import '../../../styles/landingPage/Carousel.css';
// Importar imágenes desde la carpeta local
import carousel1 from '../images/carousel1.jpg';
import carousel2 from '../images/carousel2.jpg';
import carousel3 from '../images/carousel3.jpg';
import logo from '../images/logo.png'; // Asegúrate de importar tu logo aquí
import carousel21 from '../images/carousel21.jpg';
import carousel22 from '../images/carousel22.jpeg';
import carousel23 from '../images/carousel23.jpg';
import carousel24 from '../images/carousel24.jpg';
import carousel25 from '../images/carousel25.jpg';
import carousel26 from '../images/carousel26.jpg';

const Carousel = () => {
  const [index, setIndex] = useState(0);
//Se usa el hook useState para manejar el estado interno del componente. 
//Aquí, index es una variable de estado que indica la imagen actual que se está mostrando 
//en el carrusel, y setIndex es la función para actualizar ese estado. El valor inicial es 0, 
//lo que significa que al principio se mostrará la primera imagen del carrusel.

  // Lista de imágenes y textos
  const slides = [ //slides es un array de objetos, donde cada objeto representa una diapositiva del carrusel.
    { 
      src: carousel1, 
      text: 'Tu guía digital para una vida saludable y activa',
      logo: true, 
      button: {
        text: 'Registrate',
        link: '/Registro'
      }
    },
    { 
      src: carousel2, 
      text: 'Porque tu salud nos importa, contamos con un Foro con el que podras contactar con profesionales para aclarar dudas o inquietudes.',
      logo: true,
      button: {
        text: 'Ir a Foro',
        link: '/pagina-noticias'
      }
    },
    { 
      src: carousel3, 
      text: 'Con Equilibra, accede a las últimas novedades en deportes, alimentación y todo lo esencial para tu bienestar físico y mental.',
      logo: true, 
      button: {
        text: 'Ir a Noticias',
        link: '/noticias'
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]); //se usa useEffect para configurar un intervalo que actualiza el estado del índice (index) cada 5 segundos.

  return (
    <div className="carousel">
      <div className="carousel-slide">
        <img src={slides[index].src} alt={`Slide ${index + 1}`} className="active" />
        <div className="carousel-text">
          {slides[index].logo && <img src={logo} alt="Logo" className="carousel-logo" />}
          <p>{slides[index].text}</p>
          {slides[index].button && (
            <a href={slides[index].button.link} className="carousel-button">
              {slides[index].button.text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Segundo carrusel: manual con navegación
const Carousel2 = () => {
  const [startIndex, setStartIndex] = useState(0);

  const images2 = [
    carousel21,
    carousel22,
    carousel23,
    carousel24,
    carousel25,
    carousel26,
  ];

  const imagesToShow = 3; // Número de imágenes a mostrar
  const totalImages = images2.length;//Calcula el número total de imágenes en el array 

  const goToPrevious = () => {
    setStartIndex(prevIndex => //Actualiza startIndex basado en el valor actual (prevIndex).
      prevIndex === 0 ? totalImages - imagesToShow : prevIndex - 1
    ); //Si prevIndex es 0, significa que estamos en la primera posición, así que vuelve a la última posición. De lo contrario, decrementa el índice.
  };

  const goToNext = () => { // Define una función que se llama cuando el usuario hace clic en el botón de la derecha (siguiente).
    setStartIndex(prevIndex => 
      prevIndex === totalImages - imagesToShow ? 0 : prevIndex + 1
    );//Si prevIndex está en la última posición posible, vuelve al inicio. De lo contrario, incrementa el índice.
  };

  return (
    <div className="carousel2-wrapper">{/*Contenedor principal del carrusel. Aplica estilos y controla el desbordamiento.*/}
      <div className="carousel2-container">{/*Contenedor que agrupa el carrusel y los botones de navegación.*/}
        <button className="carousel2-button prev" onClick={goToPrevious}>{/*Botón para navegar a la imagen anterior. Llama a goToPrevious al hacer clic.*/}
          &lt; 
          {/* representa la flecha hacia la izquierda. */}
        </button>
        <div className="carousel2-images">{/*Contenedor de las imágenes visibles del carrusel.*/}
          {images2.slice(startIndex, startIndex + imagesToShow).map((image, index) => ( //Utiliza slice para mostrar las imágenes desde startIndex hasta startIndex + imagesToShow. Mapea estas imágenes a elementos div con un fondo de imagen.
            <div
              key={index}
              className="carousel2-image"
              style={{ backgroundImage: `url(${image})` }}
              
            />
          ))}
        </div>
        <button className="carousel2-button next" onClick={goToNext}>{/*Botón para navegar a la imagen siguiente. Llama a goToNext al hacer clic.*/}
          &gt;
          {/* representa la flecha hacia la derecha. */}
        </button>
      </div>
      
      <a href="/galeria-entrenamiento" className="gallery-button"> {/*Enlace a la galería de entrenamiento con un estilo de botón.*/}
        Ir a galería de entrenamiento
      </a>
    </div>
  );
};

export { Carousel, Carousel2 };
