import React from "react";
import '../../../styles/landingPage/TextContainer.css'; 

const TextContainer = () => {
    return (
      <div className="text-container">
        <h2>Bienvenido a E-Quilibra.</h2>
        <p>En E-Quilibra, tenemos una firme convicción en la importancia de mantener un equilibrio perfecto entre el 
          ejercicio físico, una alimentación adecuada y el bienestar mental. Creemos que este balance es clave para 
          alcanzar una vida plena y saludable. Por eso, nuestra plataforma ha sido meticulosamente diseñada para 
          convertirse en tu compañero constante en este viaje hacia una salud mejorada y una mayor actividad física. 
          Estamos aquí para proporcionarte las herramientas necesarias, la motivación y el apoyo continuo que te ayudarán 
          a integrar hábitos positivos en tu rutina diaria. Juntos, podemos construir un futuro más saludable y feliz.</p>
      </div>
    );
  };
  
  const TextContainer2 = () => {
    return (
      <div className="text-container2">
        <div className="text-container2-image">
          <img src="https://www.ccdm.cl/wp-content/uploads/2016/08/salud-coraz%C3%B3n.jpg" alt="Descripción de la imagen" />
        </div>
        <div className="text-container2-content">
          <h2>Tu salud nos importa.</h2>
          <p> En nuestro compromiso contigo, ofrecemos un foro dedicado donde puedes resolver todas tus inquietudes y 
            preguntas de manera completamente gratuita, gracias a la colaboración de profesionales altamente cualificados. 
            Estamos aquí para apoyarte en cada paso de tu bienestar, asegurando que recibas la atención y la 
            información que necesitas para vivir una vida saludable y feliz.</p>
        </div>
      </div>
    );
  };

  const TextContainer3 = () => {
    return (
      <div className="text-container3">
        <h2>¿Tienes dudas?</h2>
        <p>Escribenos a preguntas@equilibra.cl</p>
      </div>
    );
  };

  export { TextContainer, TextContainer2, TextContainer3 };