import React, { useEffect, useState } from "react";
import styles from "../../../styles/EducationPage/EducationPage.module.scss";
import Card from "./components/Card";

const EducationPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {//llamo a la api
    fetch("http://localhost:5000/api/articles")
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
      <div className={styles.postBox}>
        <a href="/createArticle" className={styles.postButton}>
          Escribir artículo
        </a>
      </div>
      <h2>Info Activa</h2>
      <div className={styles.cards}>
        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default EducationPage;

//crear funicion 
