import React, { useState } from 'react';
import styles from '../../../../styles/Foro/formularioPregunta.module.scss';

const FormularioPregunta = ({ agregarPregunta }) => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarPregunta({ titulo, contenido });
    setTitulo('');
    setContenido('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.inputBox}>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>
      <div className={styles.inputBox}>
        <label>Contenido:</label>
        <textarea
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className={styles.button}>Enviar</button>
    </form>
  );
};

export default FormularioPregunta;