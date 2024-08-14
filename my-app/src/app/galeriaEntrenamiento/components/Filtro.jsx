import React from 'react';
import '../../../styles/galeriaEntrenamiento/Filtro.css'; 

const FiltroBar = ({ selectedCategory, onFilterChange }) => {
  // Define un componente funcional llamado FiltroBar que recibe dos props: selectedCategory 
  // (la categoría actualmente seleccionada) y onFilterChange (una función para manejar los cambios de filtro).
  const categories = ['Todo', 'Cardio', 'Fuerza', 'Tren inferior', 'Tren superior', 'Adulto Mayor'];
  // Crea un array llamado categories que contiene las categorías disponibles para el filtro.

  return (
    <div className="filtro-bar">
      {/* Renderiza un contenedor <div> con la clase CSS filtro-bar, que probablemente se utiliza para aplicar estilos 
        al contenedor de los botones de filtro. */}
      {categories.map((category) => (
        <button
          key={category}
          className={`filtro-button ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FiltroBar;
