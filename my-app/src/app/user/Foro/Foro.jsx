// Foro.jsx
import React, { useState, useEffect } from 'react';
import PreguntaItem from './components/PreguntaItem';
import FormularioPregunta from './components/FormularioPregunta';
import axios from 'axios';
import styles from '../../../styles/Foro/foro.module.scss';

const Foro = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [meGusta, setMeGusta] = useState({});
  const [mostrarFormularioRespuesta, setMostrarFormularioRespuesta] = useState(null);

  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const response = await axios.get('http://localhost:8000/preguntas');
        setPreguntas(response.data);
      } catch (error) {
        console.error('Error al obtener preguntas:', error);
      }
    };
    
    fetchPreguntas();
  }, []);

  const agregarPregunta = async (pregunta) => {
    try {
      const response = await axios.post('http://localhost:8000/preguntas', pregunta);
      setPreguntas([...preguntas, response.data]);
    } catch (error) {
      console.error('Error al agregar pregunta:', error);
    }
  };

  const toggleMeGusta = async (preguntaId) => {
    try {
      const response = await axios.post(`http://localhost:8000/preguntas/${preguntaId}/me-gusta`);
      setPreguntas((prevPreguntas) =>
        prevPreguntas.map((pregunta) =>
          pregunta.id === preguntaId
            ? { ...pregunta, likes: response.data.likes }
            : pregunta
        )
      );
      setMeGusta((prevMeGusta) => ({
        ...prevMeGusta,
        [preguntaId]: !prevMeGusta[preguntaId]
      }));
    } catch (error) {
      console.error('Error al togglear me gusta:', error);
    }
  };

  const toggleMeGustaRespuesta = async (preguntaId, respuestaId) => {
    try {
      const response = await axios.post(`http://localhost:8000/preguntas/${preguntaId}/respuestas/${respuestaId}/me-gusta`);
      setPreguntas(prevPreguntas =>
        prevPreguntas.map(pregunta =>
          pregunta.id === preguntaId
            ? {
                ...pregunta,
                respuestas: pregunta.respuestas.map(respuesta =>
                  respuesta.id === respuestaId
                    ? { ...respuesta, likes: response.data.likes }
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
    } catch (error) {
      console.error('Error al togglear me gusta en respuesta:', error);
    }
  };

  const toggleFormularioRespuesta = (preguntaId) => {
    setMostrarFormularioRespuesta((prevId) => prevId === preguntaId ? null : preguntaId);
  };

  const agregarRespuesta = async (preguntaId, respuesta) => {
    try {
      const response = await axios.post(`http://localhost:8000/preguntas/${preguntaId}/respuestas`, respuesta);
      setPreguntas((prevPreguntas) =>
        prevPreguntas.map((pregunta) =>
          pregunta.id === preguntaId
            ? {
                ...pregunta,
                respuestas: [...pregunta.respuestas, response.data]
              }
            : pregunta
        )
      );
    } catch (error) {
      console.error('Error al agregar respuesta:', error);
    }
  };

  const eliminarPregunta = async (preguntaId) => {
    try {
      await axios.delete(`http://localhost:8000/preguntas/${preguntaId}`);
      setPreguntas(preguntas.filter(pregunta => pregunta.id !== preguntaId));
    } catch (error) {
      console.error('Error al eliminar pregunta:', error);
    }
  };

  const reportarPregunta = async (preguntaId) => {
    try {
      await axios.post(`http://localhost:8000/preguntas/${preguntaId}/reportar`);
      alert('Pregunta reportada con éxito');
    } catch (error) {
      console.error('Error al reportar pregunta:', error);
    }
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
            eliminarPregunta={eliminarPregunta}
            reportarPregunta={reportarPregunta}
            meGusta={meGusta}
            mostrarFormularioRespuesta={mostrarFormularioRespuesta}
            agregarRespuesta={agregarRespuesta}
            toggleMeGustaRespuesta={toggleMeGustaRespuesta}
          />
        ))}
      </ul>
    </div>
  );
};

export default Foro;

