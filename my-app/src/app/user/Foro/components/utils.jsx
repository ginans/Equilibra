// Función para alternar el estado de "me gusta" en una pregunta
export const toggleLikePregunta = (preguntas, preguntaId, meGusta) => {
    return preguntas.map((pregunta) =>
      pregunta.id === preguntaId
        ? {
            ...pregunta,
            likes: meGusta[preguntaId] ? pregunta.likes - 1 : pregunta.likes + 1,
          }
        : pregunta
    );
  };
  
  // Función para alternar el estado de "me gusta" en una respuesta
  export const toggleLikeRespuesta = (preguntas, preguntaId, respuestaId, meGusta) => {
    return preguntas.map((pregunta) =>
      pregunta.id === preguntaId
        ? {
            ...pregunta,
            respuestas: pregunta.respuestas.map((respuesta) =>
              respuesta.id === respuestaId
                ? {
                    ...respuesta,
                    likes: meGusta[`${preguntaId}-${respuestaId}`]
                      ? respuesta.likes - 1
                      : respuesta.likes + 1,
                  }
                : respuesta
            ),
          }
        : pregunta
    );
  };
  
  