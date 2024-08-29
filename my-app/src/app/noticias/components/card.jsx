import React from "react";
import styles from "../../../styles/noticias/card.module.scss";
import { Link } from "react-router-dom";

const CardNoticia = ({ noticia }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const stripHtmlTags = (text) => {
    return text.replace(/<\/?[^>]+(>|$)/g, ""); 
  };

  const maxChar = 200; 

if (noticia){console.log(noticia)}
  return (
    <div className={styles.cardNoticia}>
      <img
        src={noticia.image}
        className={styles.cardImg}
        alt={noticia.title}
      />
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{noticia.title}</h5>
        <p className={styles.cardText}>
          {truncateText(stripHtmlTags(noticia.description), maxChar)}
        </p>
        <div className={styles.btnContainer}>
          <Link
            to={`/noticiaCompleta/${noticia.id}`}
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Ver noticia completa
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardNoticia;
