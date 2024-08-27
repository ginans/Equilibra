import React, { useState } from 'react';
import { FaThumbsUp, FaEllipsisV } from 'react-icons/fa';
import styles from '../../../../styles/Foro/respuestaItem.module.scss';

const RespuestaItem = ({ respuesta, toggleMeGusta, meGusta, usuarios }) => {
  const usuario = usuarios.find(usuario => usuario.id === respuesta.usuarioId);
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  const toggleOpciones = () => {
    setMostrarOpciones(!mostrarOpciones);
  };

  return (
    <li className={styles.respuestaItem}>
      <div className={styles.respuestaUsuario}>
        <img src={usuario.foto} alt={usuario.nombre} />
        <p>{usuario.nombre} {usuario.verificado && <span className={styles.verificado}>✔</span>}</p>
      </div>
      <p>{respuesta.contenido}</p>
      <div className={styles.icons}>
        <div className={styles.iconContainer} onClick={toggleMeGusta}>
          <FaThumbsUp className={meGusta ? styles.iconActive : styles.iconInactive} />
          <span>{respuesta.likes || 0}</span>
        </div>
        <div className={styles.dropdown}>
          <div className={styles.iconContainer} onClick={toggleOpciones}>
            <FaEllipsisV />
          </div>
          {mostrarOpciones && (
            <div className={styles.dropdownContent}>
              <button onClick={() => alert('Eliminar respuesta')}>Eliminar</button>
              <button onClick={() => alert('Compartir respuesta')}>Compartir</button>
              <button onClick={() => alert('Reportar respuesta')}>Reportar</button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default RespuestaItem;

