import React, { useState } from 'react';
import { FaThumbsUp, FaComment, FaEllipsisV } from 'react-icons/fa';
import styles from '../../../../styles/Foro/foro.module.scss';
import RespuestaItem from './RespuestaItem';
import FormularioRespuesta from './FormularioRespuesta';

const PreguntaItem = ({
  pregunta,
  toggleMeGusta,
  toggleFormularioRespuesta,
  meGusta,
  mostrarFormularioRespuesta,
  agregarRespuesta,
  toggleMeGustaRespuesta,
  usuarios,
}) => {
  const usuario = usuarios.find((usuario) => usuario.id === pregunta.usuarioId);
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  const toggleOpciones = () => setMostrarOpciones(!mostrarOpciones);

  return (
    <li className={styles.preguntaItem}>
      <h2>{pregunta.titulo}</h2>
      <p>{pregunta.contenido}</p>
      <div className={styles.preguntaUsuario}>
        <img src={usuario.foto} alt={usuario.nombre} />
        <p>{usuario.nombre} {usuario.verificado && <span className={styles.verificado}>✔</span>}</p>
      </div>
      <div className={styles.icons}>
        <div className={styles.iconContainer} onClick={() => toggleMeGusta(pregunta.id)}>
          <FaThumbsUp className={meGusta[pregunta.id] ? styles.iconActive : styles.iconInactive} />
          <span>{pregunta.likes}</span>
        </div>
        <div className={styles.iconContainer} onClick={() => toggleFormularioRespuesta(pregunta.id)}>
          <FaComment />
        </div>
        <div className={styles.dropdown}>
          <div className={styles.iconContainer} onClick={toggleOpciones}>
            <FaEllipsisV />
          </div>
          {mostrarOpciones && (
            <div className={styles.dropdownContent}>
              <button onClick={() => alert('Opción de eliminar')}>Eliminar</button>
              <button onClick={() => alert('Opción de compartir')}>Compartir</button>
              <button onClick={() => alert('Opción de reportar')}>Reportar</button>
            </div>
          )}
        </div>
      </div>
      {mostrarFormularioRespuesta === pregunta.id && (
        <FormularioRespuesta agregarRespuesta={(respuesta) => agregarRespuesta(pregunta.id, respuesta)} />
      )}
      <ul>
        {pregunta.respuestas.map((respuesta) => (
          <RespuestaItem
            key={respuesta.id}
            respuesta={respuesta}
            toggleMeGusta={() => toggleMeGustaRespuesta(pregunta.id, respuesta.id)}
            meGusta={meGusta[`${pregunta.id}-${respuesta.id}`]}
            usuarios={usuarios}
          />
        ))}
      </ul>
    </li>
  );
};

export default PreguntaItem;
