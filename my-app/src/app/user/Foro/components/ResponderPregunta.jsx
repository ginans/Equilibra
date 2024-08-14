import React, { useState } from 'react';
import styles from '../../../../styles/Foro/foro.module.scss';

const ResponderPregunta = ({ pregunta, agregarRespuesta }) => {
  // Estado para la respuesta del usuario
  const [respuesta, setRespuesta] = useState('');

  // Maneja el envío del formulario y agrega una nueva respuesta
  const handleSubmit = (e) => {
    e.preventDefault();
    agregarRespuesta(pregunta.id, { texto: respuesta });
    setRespuesta('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.inputBox}>
        <label htmlFor="respuesta">Respuesta:</label>
        <textarea
          id="respuesta"
          value={respuesta}
          onChange={(e) => setRespuesta(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className={styles.button}>Responder</button>
    </form>
  );
};

export default ResponderPregunta;
