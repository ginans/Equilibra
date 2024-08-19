import React, { useState, useRef, useEffect } from 'react';
import '../../../styles/galeriaEntrenamiento/Filtro.css'; 

const FiltroBar = ({ selectedCategory, onFilterChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref para el menú adicional
  const buttonRef = useRef(null); // Ref para el botón hamburguesa

  const categories = ['Todo', 'Cardio', 'Fuerza', 'Tren inferior', 'Tren superior'];
  const additionalCategories = ['Adulto Mayor', 'Flexibilidad', 'Categoría 3']; // Añade aquí las categorías adicionales

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Cierra el menú si se hace clic fuera de él o del botón hamburguesa
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Añade el manejador de eventos al montar el componente
    document.addEventListener('mousedown', handleClickOutside);

    // Limpia el manejador de eventos al desmontar el componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="filtro-bar">
      {categories.map((category) => (
        <button
          key={category}
          className={`filtro-button ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
      <button
        className="hamburger-button"
        onClick={toggleMenu}
        ref={buttonRef} // Asocia el ref al botón hamburguesa
      >
        ☰ {/* Icono de menú hamburguesa */}
      </button>
      {isMenuOpen && (
        <div className="additional-categories" ref={menuRef}>
          {additionalCategories.map((category) => (
            <button
              key={category}
              className={`filtro-button ${selectedCategory === category ? 'active' : ''}`}
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
