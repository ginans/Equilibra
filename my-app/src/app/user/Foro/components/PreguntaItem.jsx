import React from 'react';
import { FaThumbsUp, FaCommentDots, FaEllipsisH } from 'react-icons/fa';
import FormularioRespuesta from './FormularioRespuesta';
import styles from '../../../../styles/Foro/preguntaItem.module.scss';

const PreguntaItem = ({
  pregunta,
  toggleMeGusta,
  toggleFormularioRespuesta,
  eliminarPregunta,
  reportarPregunta,
  meGusta,
  mostrarFormularioRespuesta,
  agregarRespuesta,
  toggleMeGustaRespuesta
}) => {
  console.log (pregunta)
  return (
    <li className={styles.preguntaItem}>
      <h2>{pregunta.titulo}</h2>
      <p>{pregunta.descripcion}</p>
      <div className={styles.preguntaUsuario}>
        <img src = "https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?t=st=1724901979~exp=1724905579~hmac=e4ca4bb796d82f4b526e117e02c1f548d55a3431fb6f1e11447ec15aa346ccd6&w=1060"/>
        <p>{pregunta.usuario.userName}</p>
      </div>
      <div className={styles.icons}>
        <div className={styles.iconContainer}>
          <FaThumbsUp
            className={meGusta[pregunta.id] ? styles.iconActive : styles.iconInactive}
            onClick={() => toggleMeGusta(pregunta.id)}
          />
          <span>{pregunta.likes}</span>
        </div>
        <div className={styles.iconContainer}>
          <FaCommentDots
            className={styles.iconInactive}
            onClick={() => toggleFormularioRespuesta(pregunta.id)}
          />
        </div>
        <div className={styles.dropdown}>
          <FaEllipsisH className={styles.iconInactive} />
          <div className={styles.dropdownContent}>
            <button onClick={() => reportarPregunta(pregunta.id)}>Reportar</button>
            <button onClick={() => eliminarPregunta(pregunta.id)}>Eliminar</button>
          </div>
        </div>
      </div>
      {mostrarFormularioRespuesta === pregunta.id && (
        <FormularioRespuesta agregarRespuesta={(respuesta) => agregarRespuesta(pregunta.id, respuesta)} />
      )}
    </li>
  );
};

export default PreguntaItem;
