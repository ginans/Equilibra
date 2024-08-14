import React, { useState } from 'react';
import styles from '../../../../styles/Foro/foro.module.scss'; 

const FormularioPregunta = ({ agregarPregunta }) => {
  // Estado para el título y la descripción de la nueva pregunta
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  // Maneja el envío del formulario y agrega una nueva pregunta
  const handleSubmit = (e) => {
    e.preventDefault();
    agregarPregunta({ titulo, descripcion });
    setTitulo('');
    setDescripcion('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.inputBox}>
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className={styles.button}>Agregar Pregunta</button>
    </form>
  );
};

export default FormularioPregunta;


