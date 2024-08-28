import React, { useState, useEffect } from 'react';
import styles from '../../../styles/galeriaEntrenamiento/Cards.module.scss'; 
import FiltroBar from './Filtro'; 
import Logo from '../../galeriaEntrenamiento/images/logo.png';

const Card = ({ title, image, text, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

const Cards = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todo');
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  const [cardData, setCardData] = useState([]);

  const fetchCardData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/videos');
      const data = await response.json();
      setCardData(data.reverse());
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  const handleCardClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  const filteredCardData = selectedCategory === 'Todo'
    ? cardData
    : cardData.filter(card => card.category === selectedCategory);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCardData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredCardData.length / cardsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <FiltroBar
        selectedCategory={selectedCategory}
        onFilterChange={handleFilterChange}
      />
      <div className={styles.cardsContainer}>
        {currentCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            text={card.content}
            image={card.image}
            onClick={() => handleCardClick(card.video_url)}
          />
        ))}
      </div>

      {selectedVideo && (
      <div className={styles.videoOverlay}>
        <div className={styles.videoModal}>
          <button className={styles.closeButton} onClick={handleCloseVideo}>X</button>
          <img src={Logo} alt="Logo" className={styles.logoImage} />
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      )}

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`${styles.pageButton} ${currentPage === index + 1 ? styles.active : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cards;
