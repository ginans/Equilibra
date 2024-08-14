import React, { useState } from 'react';
import PreguntaItem from './PreguntaItem';
import FormularioPregunta from './FormularioPregunta';
import Usuarios from '../../Foro/components/data/usuarios';
import styles from '../../../../styles/Foro/foro.module.scss';

const Foro = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [meGusta, setMeGusta] = useState({});
  const [mostrarFormularioRespuesta, setMostrarFormularioRespuesta] = useState(null);

  const agregarPregunta = (pregunta) => {
    const nuevaPregunta = {
      ...pregunta,
      id: preguntas.length + 1,
      usuarioId: 1, // ID del usuario que hace la pregunta
      respuestas: [],
      likes: 0
    };
    setPreguntas([...preguntas, nuevaPregunta]);
  };

  const toggleMeGusta = (preguntaId) => {
    setPreguntas((prevPreguntas) =>
      prevPreguntas.map((pregunta) =>
        pregunta.id === preguntaId
          ? {
              ...pregunta,
              likes: meGusta[preguntaId] ? pregunta.likes - 1 : pregunta.likes + 1
            }
          : pregunta
      )
    );

    setMeGusta((prevMeGusta) => ({
      ...prevMeGusta,
      [preguntaId]: !prevMeGusta[preguntaId]
    }));
  };

  const toggleMeGustaRespuesta = (preguntaId, respuestaId) => {
    setPreguntas(prevPreguntas =>
      prevPreguntas.map(pregunta =>
        pregunta.id === preguntaId
          ? {
              ...pregunta,
              respuestas: pregunta.respuestas.map(respuesta =>
                respuesta.id === respuestaId
                  ? {
                      ...respuesta,
                      likes: meGusta[`${preguntaId}-${respuestaId}`]
                        ? (respuesta.likes || 0) - 1
                        : (respuesta.likes || 0) + 1
                    }
                  : respuesta
              )
            }
          : pregunta
      )
    );

    setMeGusta(prevMeGusta => ({
      ...prevMeGusta,
      [`${preguntaId}-${respuestaId}`]: !prevMeGusta[`${preguntaId}-${respuestaId}`]
    }));
  };

  const toggleFormularioRespuesta = (preguntaId) => {
    setMostrarFormularioRespuesta((prevId) =>
      prevId === preguntaId ? null : preguntaId
    );
  };

  const agregarRespuesta = (preguntaId, respuesta) => {
    setPreguntas((prevPreguntas) =>
      prevPreguntas.map((pregunta) =>
        pregunta.id === preguntaId
          ? {
              ...pregunta,
              respuestas: [
                ...pregunta.respuestas,
                { ...respuesta, id: pregunta.respuestas.length + 1, usuarioId: 2, likes: 0 }
              ]
            }
          : pregunta
      )
    );
  };

  return (
    <div className={styles.home}>
      <h1>Foro</h1>
      <FormularioPregunta agregarPregunta={agregarPregunta} />
      <ul className={styles.preguntasList}>
        {preguntas.map((pregunta) => (
          <PreguntaItem
            key={pregunta.id}
            pregunta={pregunta}
            toggleMeGusta={toggleMeGusta}
            toggleFormularioRespuesta={toggleFormularioRespuesta}
            eliminarPregunta={() => {}}
            compartirPregunta={() => {}}
            reportarPregunta={() => {}}
            meGusta={meGusta}
            mostrarFormularioRespuesta={mostrarFormularioRespuesta}
            agregarRespuesta={agregarRespuesta}
            toggleMeGustaRespuesta={toggleMeGustaRespuesta} // Pasar la función para los likes en respuestas
            usuarios={Usuarios}
          />
        ))}
      </ul>
    </div>
  );
};

export default Foro;
