import React from "react";
import styles from "../../../../styles/EducationPage/EducationPage.module.scss"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FullArticle = () => {
  
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("Fetching article with id:", id);
    fetch(`http://localhost:5000/api/articles/${id}`)
      .then(response => response.json())
      .then(data => {
        setArticle(data); 
      })
      .catch(error => {
        console.error('Error al obtener artículo:', error);
      });
  }, [id]);

  if (!article) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.fullArticle}>
      <h2 className={styles.titles}>{article.title}</h2>
      <div className={styles.imagesBox}>
        <img className={styles.images} alt={article.title} src={article.image} width={"500px"}/>
      </div>
      <p className={styles.bodies}>{article.content}</p>
    </div>
  );
}    

export default FullArticle;