import React from "react";
import styles from "../../../../styles/EducationPage/EducationPage.module.scss";
import saludMental from "../images/ejercicio-y-salud-mental.jpg";

const Card = () => {
  console.log("rendering card");
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <img src={saludMental} className={styles.cardImg} alt="salud mental" />
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>
            Beneficios del ejercicio fisico en la salud mental.
          </h5>
          <p className={styles.cardText}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="..." className={`${styles.btn} ${styles.btnPrimary}`}>
            Ver artículo completo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
