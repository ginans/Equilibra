import React, { useEffect, useState } from "react";
import styles from "../../../styles/EducationPage/EducationPage.module.scss";
import Card from "./components/Card";
import useCheckAdmin from "../../../hooks/useCheckAdmin";

const EducationPage = () => {
  const [articles, setArticles] = useState([]);
  const isAdminLogged = useCheckAdmin();

  useEffect(() => {
    //llamo a la api
    fetch("http://localhost:8000/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data); // Guardo los artículos obtenidos
      })
      .catch((error) => {
        console.error("Error al obtener artículos:", error);
      });
  }, []);

  return (
    <div className={styles.educationPage}>
      {isAdminLogged ? ( /*mostrar u ocultar el boton para publicar*/
        <div className={styles.postBox}>
          <a href="/createArticle" className={styles.postButton}>
            Escribir artículo
          </a>
        </div>
      ) : (
        <>
        </>
      )}

      <h2>Info Activa</h2>
      <div className={styles.cards}>
        {articles
          .slice()
          .reverse()
          .map((article) => (
            <Card key={article.id} article={article} />
          ))}
      </div>
    </div>
  );
};

export default EducationPage;
