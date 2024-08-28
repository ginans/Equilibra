// src/components/Cards.js

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from '../../../styles/landingPage/Cards.module.scss';

// Componente Card
const Card = ({ title, link, image }) => {
  return (
    <div className={styles.card} onClick={() => window.open(link, '_blank')}>
      <img
        src={image}
        alt={title}
        className={styles.cardImage}
        loading="lazy"
        onError={(e) => e.target.src = '/path/to/default/image.jpg'} // Usa una ruta accesible desde el servidor
      />
      <h3>{title}</h3>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

const Cards = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8000/api/noticias')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCardData(data.map((item) => ({
          id: item.id,
          title: item.title,
          link: item.url,
          image: item.image
        })));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className={styles.cardsSection}>
      <div className={styles.cardsContainer}>
        {cardData.map((card) => (
          <Card key={card.id} title={card.title} link={card.link} image={card.image} />
        ))}
      </div>
      <button className={styles.viewMoreButton} onClick={() => navigate('/noticias')}>
        Ver más noticias
      </button>
    </div>
  );
};

export default Cards;
