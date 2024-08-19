import React, { useState } from 'react';
import styles from '../../../../styles/Foro/foro.module.scss';

const FormularioPregunta = ({ agregarPregunta }) => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (titulo && contenido) {
      agregarPregunta({ titulo, contenido });
      setTitulo('');
      setContenido('');
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={manejarEnvio}>
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
        <label htmlFor="contenido">Contenido:</label>
        <textarea
          id="contenido"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
        />
      </div>
      <button className={styles.button} type="submit">
        Publicar pregunta
      </button>
    </form>
  );
};

export default FormularioPregunta;
