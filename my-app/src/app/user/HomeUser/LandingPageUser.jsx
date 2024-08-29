import React, { useState, useEffect } from "react";
// import Feed from './components/Feed.jsx';
import styles from "../../../styles/HomeUser/LandigPageUser.module.scss";
import useCheckAdmin from "../../../hooks/useCheckAdmin.jsx";
import useCheckClient from "../../../hooks/useCheckClient.jsx";
import useCheckProfessional from "../../../hooks/useCheckProfessional.jsx";

const LandingPageUser = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAdminLogged = useCheckAdmin();
  const isProfessionalLogged = useCheckProfessional();
  const isClientLogged = useCheckClient();

  useEffect(() => {
    const fetchUserData = async () => {
      let url;
      let token;

      if (isClientLogged) {
        token = localStorage.getItem("token");
        url = `http://localhost:8000/getUserClientById/${token}`;
      } else if (isProfessionalLogged) {
        token = localStorage.getItem("tokenProfessional");
        url = `http://localhost:8000/getdataUserProfessional/${token}`;
      } else if (isAdminLogged) {
        token = localStorage.getItem("tokenAdmin");
        url = `http://localhost:8000/getDataUserAdmin/${token}`;
      }

      if (token && url) {
        try {
          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            throw new Error("Error al obtener los datos del usuario");
          }
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false); // Maneja el caso cuando no hay token o URL
      }
    };

    if (isAdminLogged || isClientLogged || isProfessionalLogged) {
      fetchUserData();
    } else {
      setLoading(false); // Maneja el caso cuando no hay sesión activa
    }
  }, [isAdminLogged, isClientLogged, isProfessionalLogged]);

  // Determina el nombre del usuario según su tipo
  const getUserName = () => {
    if (isClientLogged && userData?.userName) {
      return userData.userName;
    } else if (isProfessionalLogged && userData?.userNameP) {
      return userData.userNameP;
    } else if (isAdminLogged && userData?.name) {
      return userData.name;
    }
    return "Invitado";
  };

  return (
    <div className={styles.landingPageUser}>
      {loading ? <p>Cargando...</p> : <h1>Bienvenid@ {getUserName()}!</h1>}
      <div>
        {/* <Feed/> no tocar*/}

        <div>
          {/* aqui va la simulacion de feed */}
          <div className={styles.feed}>
            <div className={styles.feedBox}>
              <h3>Artículo</h3>
              <div className={styles.articleContent}>
                <img
                  src="https://carepatrol.com/western-michigan-capital-region/wp-content/uploads/sites/364/2024/02/care_patrol_blog_image_%E2%80%93_26.jpg"
                  alt="Imagen del Artículo"
                  className={styles.articleImage}
                />
                <div>
                  <h3>Beneficios del Ejercicio Físico en Adultos Mayores</h3>
                  <p>
                    El ejercicio físico es esencial en todas las etapas de la
                    vida, y en los adultos mayores, tiene un impacto
                    significativo en la salud y la calidad de vida. Con el paso
                    de los años, mantenerse físicamente activo puede ayudar a
                    prevenir diversas enfermedades, mejorar la movilidad, y
                    fomentar un envejecimiento saludabl...
                  </p>
                  <a href="/">Leer más</a>
                </div>
              </div>
            </div>
            <div className={styles.feedBox}>
              <div className={styles.ejercicio}>
                <h3>Rutina</h3>
                <img
                  src="https://img.youtube.com/vi/6lCeNlSoonk/maxresdefault.jpg"
                  alt="Sentadillas"
                />
              </div>
            </div>

            <div className={styles.feedBox}>
              <h3>Noticia</h3>
              <div className={styles.newsContent}>
                <img
                  src="https://i0.wp.com/www.duplos.cl/wp-content/uploads/2024/08/bb_fa32b9ad-5fc1-4c77-a63f-1f7fe26fa11f.jpg?w=1200&ssl=1"
                  alt="Imagen de la Noticia"
                  className={styles.newsImage}
                />
                <div>
                  <p>
                    Perrear hasta el suelo es una habilidad que con los años se
                    va perdiendo, tal como la flexibilidad que tenemos en las
                    caderas, porque tal ejercicio requiere una movilidad y
                    fuerza en el área que con la vejez, vamos perdiendo. Esto
                    porque a medida que envejecemos, la flexibilidad nos va
                    abandonando si no cuidamos nuestro cuerpo. Cada vez es más
                    difícil realizar acciones tan sencillas como bailar hasta el
                    suelo, levantar las piernas o tocarte la punta de los pies.
                  </p>
                  <a href="/">Leer más</a>
                </div>
              </div>
            </div>

            <div className={styles.feedBox}>
              <div className={styles.ejercicio}>
                <h3>Rutina</h3>
                <img
                  src="https://img.youtube.com/vi/uSD5IxmEQdI/maxresdefault.jpg"
                  alt="Flexiones"
                />
              </div>
            </div>

            <div className={styles.feedBox}>
              <div className={styles.ejercicio}>
                <h3>Rutina</h3>
                <img
                  src="https://img.youtube.com/vi/etY6yH_blQs/maxresdefault.jpg"
                  alt="Abdominales"
                />
              </div>
            </div>

            <div className={styles.seccionPreguntaForo}>
              <h3>Foro</h3>
              <p>
                ¿Cómo puedo mejorar mi resistencia durante el entrenamiento?
              </p>
              <a href="/">Ver respuestas</a>
            </div>

            <div className={styles.feedBox}>
              <h3>Artículo</h3>
              <div className={styles.articleContent}>
                <img
                  src="https://www.saludadiario.cl/wp-content/uploads/2021/10/gym.jpg.webp"
                  alt="Imagen del Artículo"
                  className={styles.articleImage}
                />
                <div>
                  <h3>¿Por qué es bueno hacer ejercicio si tengo diabetes?</h3>
                  <p>
                    El ejercicio físico es una de las herramientas más efectivas
                    para el manejo y prevención de la diabetes, tanto de tipo 1
                    como de tipo 2. La actividad física regular ayuda a
                    controlar los niveles de glucosa en la sangre, mejora...
                  </p>
                  <a href="/">Leer más</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageUser;
