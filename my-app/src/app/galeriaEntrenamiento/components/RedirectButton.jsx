// RedirectButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../../styles/galeriaEntrenamiento/RedirectButton.module.scss'; // Importa el archivo SCSS module

const RedirectButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/AdminVideos');
  };

  return (
    <div className={styles.boxButton}>
    <button className={styles.button} onClick={handleClick}>
      Administrar Videos
    </button>
    </div>
  );
};

export default RedirectButton;
