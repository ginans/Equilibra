import React, { useState } from 'react';
import styles from '../../../../styles/Foro/respuestaItem.module.scss';

const RespuestaItem = ({ respuesta, toggleMeGustaRespuesta }) => {
  const [meGusta, setMeGusta] = useState(false);

  const handleMeGustaClick = () => {
    toggleMeGustaRespuesta(respuesta.preguntaId, respuesta.id);
    setMeGusta(!meGusta);
  };

  return (
    <div className={styles.respuestaItem}>
      <div className={styles.respuestaUsuario}>
        <img src={respuesta.usuarioImagen} alt="Usuario" />
        <p>{respuesta.usuario}</p>
      </div>
      <p>{respuesta.contenido}</p>
      <div className={styles.icons}>
        <div className={styles.iconContainer} onClick={handleMeGustaClick}>
          <span className={meGusta ? styles.iconActive : styles.iconInactive}>👍</span>
          <span>{respuesta.likes}</span>
        </div>
        {/* Puedes agregar más iconos aquí si es necesario */}
      </div>
    </div>
  );
};

export default RespuestaItem;
