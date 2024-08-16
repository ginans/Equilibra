import React from "react";
import styles from "../../../../styles/EducationPage/EducationPage.module.scss";
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <img src={article.image} className={styles.cardImg} alt={article.title} />
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>
            {article.title}
          </h5>
          <p className={styles.cardText}>
            {article.content}
          </p>
          <Link to={`/fullArticle/${article.id}`} className={`${styles.btn} ${styles.btnPrimary}`}>
            Ver artículo completo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
