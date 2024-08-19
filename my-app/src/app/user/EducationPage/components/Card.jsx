import React from "react";
import styles from "../../../../styles/EducationPage/EducationPage.module.scss";
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  const truncateText = (text, maxLength) => {
    // Función para truncar el texto a un máximo de caracteres
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "..."; // Agrega '...' si el texto es truncado
  };
  const maxChar = 150;

  return (
    <div className={styles.card}>
      <img
        src={article.image}
        className={styles.cardImg}
        alt={article.title}
      />
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{article.title}</h5>
        <p className={styles.cardText}>
          {truncateText(article.content, maxChar)}
        </p>
        <Link
          to={`/fullArticle/${article.id}`}
          className={`${styles.btn} ${styles.btnPrimary}`}
        >
          Ver artículo completo
        </Link>
      </div>
    </div>
  );
};

export default Card;

