import React, { useState } from 'react';
import styles from '../../../../styles/Foro/foro.module.scss';

const FormularioRespuesta = ({ agregarRespuesta }) => {
  const [contenido, setContenido] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (contenido) {
      agregarRespuesta({ contenido });
      setContenido('');
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={manejarEnvio}>
      <div className={styles.inputBox}>
        <label htmlFor="respuesta">Responder:</label>
        <textarea
          id="respuesta"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
        />
      </div>
      <button className={styles.button} type="submit">
        Enviar respuesta
      </button>
    </form>
  );
};

export default FormularioRespuesta;
