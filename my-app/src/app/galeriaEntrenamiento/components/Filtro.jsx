import React, { useState, useRef, useEffect } from 'react';
import styles from '../../../styles/galeriaEntrenamiento/Filtro.module.scss'; 

const FiltroBar = ({ selectedCategory, onFilterChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const categories = ['Todo', 'Cardio', 'Fuerza', 'Tren inferior', 'Tren superior'];
  const additionalCategories = ['Adulto Mayor', 'Flexibilidad', 'Embarazadas'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles['filtro-bar']}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles['filtro-button']} ${selectedCategory === category ? styles['active'] : ''}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
      <button
        className={styles['hamburger-button']}
        onClick={toggleMenu}
        ref={buttonRef}
      >
        ☰
      </button>
      {isMenuOpen && (
        <div className={styles['additional-categories']} ref={menuRef}>
          {additionalCategories.map((category) => (
            <button
              key={category}
              className={`${styles['filtro-button']} ${selectedCategory === category ? styles['active'] : ''}`}
              onClick={() => onFilterChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FiltroBar;
