import React, { useState, useEffect } from 'react';
import styles from '../../../styles/landingPage/Carousel.module.scss'; // Asegúrate de que el archivo SCSS esté en esta ruta

// Importar imágenes desde la carpeta local
import carousel1 from '../images/carousel1.jpg';
import carousel2 from '../images/carousel2.jpg';
import carousel3 from '../images/carousel3.jpg';
import carousel21 from '../images/carousel21.jpg';
import carousel22 from '../images/carousel22.jpeg';
import carousel23 from '../images/carousel23.jpg';
import carousel24 from '../images/carousel24.jpg';
import carousel25 from '../images/carousel25.jpg';
import carousel26 from '../images/carousel26.jpg';
import logo from '../images/logo.png'; // Asegúrate de importar tu logo aquí

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [showContent, setShowContent] = useState(true); // Inicia mostrando el contenido

  // Lista de imágenes y textos
  const slides = [
    { 
      src: carousel1, 
      text: 'Tu guía digital para una vida saludable y activa',
      logo: true, 
      button: {
        text: 'Registrate',
        link: '/login'
      }
    },
    { 
      src: carousel2, 
      text: 'Porque tu salud nos importa, contamos con un Foro con el que podras contactar con profesionales para aclarar dudas o inquietudes.',
      logo: true,
      button: {
        text: 'Ir a Foro',
        link: '/Foro'
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
    const changeImage = () => {
      setShowContent(false); // Oculta el contenido antes de cambiar la imagen

      // Cambia la imagen después de 300ms
      setTimeout(() => {
        setIndex(prevIndex => {
          const nextIndex = (prevIndex === slides.length - 1 ? 0 : prevIndex + 1);
          return nextIndex;
        });

        // Muestra el contenido después de la transición de la imagen (500ms)
        setTimeout(() => {
          setShowContent(true);
        }, 500); // Tiempo para mostrar el contenido después de que la nueva imagen esté lista
      }, 500); // Tiempo para ocultar el contenido antes del cambio de imagen
    };

    // Intervalo para cambiar de imagen cada 5 segundos
    const interval = setInterval(changeImage, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselSlide}>
        <img src={slides[index].src} alt={`Slide ${index + 1}`} className={styles.active} />
        <div className={`${styles.carouselText} ${showContent ? styles.show : styles.hide}`}>
          {slides[index].logo && <img src={logo} alt="Logo" className={styles.carouselLogo} />}
          <p>{slides[index].text}</p>
          {slides[index].button && (
            <a href={slides[index].button.link} className={styles.carouselButton}>
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

  const imagesToShow = 3;
  const totalImages = images2.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prevIndex => 
        prevIndex === totalImages - imagesToShow ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [totalImages, imagesToShow]);

  const goToPrevious = () => {
    setStartIndex(prevIndex => 
      prevIndex === 0 ? totalImages - imagesToShow : prevIndex - 1
    );
  };

  const goToNext = () => {
    setStartIndex(prevIndex => 
      prevIndex === totalImages - imagesToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className={styles.carousel2Wrapper}>
        <button className={`${styles.carousel2Button} ${styles.prev}`} onClick={goToPrevious}>
          &lt;
        </button>
        <div className={styles.carousel2Container}>
          <div className={styles.carousel2Images}>
            {images2.slice(startIndex, startIndex + imagesToShow).map((image, index) => (
              <div
                key={index}
                className={styles.carousel2Image}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </div>
        <button className={`${styles.carousel2Button} ${styles.next}`} onClick={goToNext}>
          &gt;
        </button>
      </div>
      
      <a href="/galeria-entrenamiento" className={styles.galleryButton}>
        Ir a galería de entrenamiento
      </a>
    </>
  );
};
export { Carousel, Carousel2 };
