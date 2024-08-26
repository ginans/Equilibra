import React from "react";
import styles from "../../../../styles/EducationPage/Card.module.scss"
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const stripHtmlTags = (text) => {
    return text.replace(/<\/?[^>]+(>|$)/g, ""); // para eliminar las etiquetas HTML
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
          {truncateText(stripHtmlTags(article.content), maxChar)}
        </p>
        <div className={styles.btnContainer}>
          <Link
            to={`/fullArticle/${article.id}`}
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Ver artículo completo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;