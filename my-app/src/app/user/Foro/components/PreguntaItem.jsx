import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import ResponderPregunta from './ResponderPregunta';
import styles from '../../../../styles/Foro/foro.module.scss';

const PreguntaItem = ({
  pregunta,
  toggleMeGusta,
  toggleFormularioRespuesta,
  eliminarPregunta,
  compartirPregunta,
  reportarPregunta,
  meGusta,
  mostrarFormularioRespuesta,
  agregarRespuesta,
  toggleMeGustaRespuesta,
  eliminarRespuesta,
  compartirRespuesta,
  reportarRespuesta,
  usuarios
}) => {
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const usuario = usuarios.find(user => user.id === pregunta.usuarioId);

  const handleDropdownToggle = () => {
    setMostrarDropdown(prevMostrarDropdown => !prevMostrarDropdown);
  };

  return (
    <li className={styles.preguntaItem}>
      <Link to={`/pregunta/${pregunta.id}`}>
        <h2>{pregunta.titulo}</h2>
        <p>{pregunta.descripcion}</p>
        <div className={styles.preguntaUsuario}>
          {usuario && <img src={usuario.foto} alt={usuario.nombre} />}
          <p>{usuario ? usuario.nombre : 'Desconocido'}</p>
        </div>
      </Link>
      <div className={styles.icons}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => toggleMeGusta(pregunta.id)}
            className={meGusta[pregunta.id] ? styles.iconActive : styles.iconInactive}
          />
          <span>{pregunta.likes}</span>
        </div>
        <FontAwesomeIcon
          icon={faComment}
          onClick={() => toggleFormularioRespuesta(pregunta.id)}
        />
        <div className={styles.dropdown}>
          <FontAwesomeIcon
            icon={faEllipsisV}
            onClick={handleDropdownToggle}
            className={styles.iconDropdown}
          />
          {mostrarDropdown && (
            <div className={styles.dropdownContent}>
              <button onClick={() => eliminarPregunta(pregunta.id)}>Eliminar</button>
              <button onClick={() => compartirPregunta(pregunta.id)}>Compartir</button>
              <button onClick={() => reportarPregunta(pregunta.id)}>Reportar</button>
            </div>
          )}
        </div>
      </div>
      {mostrarFormularioRespuesta === pregunta.id && (
        <ResponderPregunta pregunta={pregunta} agregarRespuesta={agregarRespuesta} />
      )}
      <ul>
        {pregunta.respuestas.map(respuesta => {
          const usuarioRespuesta = usuarios.find(user => user.id === respuesta.usuarioId);
          return (
            <li key={respuesta.id} className={styles.respuestaItem}>
              <div className={styles.respuestaUsuario}>
                {usuarioRespuesta && <img src={usuarioRespuesta.foto} alt={usuarioRespuesta.nombre} />}
                <p>{usuarioRespuesta ? usuarioRespuesta.nombre : 'Desconocido'}</p>
              </div>
              <p>{respuesta.texto}</p>
              <div className={styles.icons}>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    onClick={() => toggleMeGustaRespuesta(pregunta.id, respuesta.id)}
                    className={meGusta[`${pregunta.id}-${respuesta.id}`] ? styles.iconActive : styles.iconInactive}
                  />
                  <span>{respuesta.likes}</span>
                </div>
                <div className={styles.dropdown}>
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    onClick={handleDropdownToggle}
                    className={styles.iconDropdown}
                  />
                  {mostrarDropdown && (
                    <div className={styles.dropdownContent}>
                      <button onClick={() => eliminarRespuesta(pregunta.id, respuesta.id)}>Eliminar</button>
                      <button onClick={() => compartirRespuesta(pregunta.id, respuesta.id)}>Compartir</button>
                      <button onClick={() => reportarRespuesta(pregunta.id, respuesta.id)}>Reportar</button>
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default PreguntaItem;
