import React, { useState } from 'react';
import styles from '../../../../styles/Foro/formularioRespuesta.module.scss';

const FormularioRespuesta = ({ preguntaId, agregarRespuesta }) => {
  const [contenido, setContenido] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contenido.trim()) {
      agregarRespuesta(preguntaId, { contenido });
      setContenido('');
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <label htmlFor="respuesta">Tu Respuesta</label>
          <textarea
            id="respuesta"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.button}>
          Enviar Respuesta
        </button>
      </form>
    </div>
  );
};

export default FormularioRespuesta;
