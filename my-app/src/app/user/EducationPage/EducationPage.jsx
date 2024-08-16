import React, { useEffect, useState } from 'react';
import styles from "../../../styles/EducationPage/EducationPage.module.scss";
import Card from "./components/Card";



const EducationPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/articles')
      .then(response => response.json())
      .then(data => {
        setArticles(data); //Guardo los artículos que llamo
      })
      .catch(error => {
        console.error('Error al obtener artículos:', error);
      });
  }, []);

  return (
    
      
      <div className={styles.educationPage}>

        <div className={styles.postBox}>
          <a href="/createArticle" className={styles.postButton}>Escribir articulo</a>
        </div>
        <h2>Info Activa</h2>
        {articles.map(article => (
          <>
          <Card key={article.id} article={article} />
          </>
        ))}
      </div>

    
  );
};

export default EducationPage;