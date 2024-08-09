import React from 'react';
import styles from "../../../../styles/HomeUser/LandigPageUser.module.scss"


const truncateText = (text, maxLength) => { //funcion para el maximo de caracteres
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...'; // Agrega '...' si el texto es truncado
};
const maxLenghtVar= 200
const FeedItem = ({ item }) => {
  return (
    <div className={styles.feedItem}>
      <h3>{item.title}</h3>
      <div className={styles.feedContent}>
     {item.image && <img src={item.image} width="auto" height="150px" alt={item.alt} />} {/* verifica si hay imagen */}
      <p>{truncateText(item.content, maxLenghtVar)} {item.url && <a href={item.url} target="_blank" rel="noreferrer" className={styles.link}>Ver más.</a>}</p>
      </div>
      <br/>
      <hr/>
    </div>
  );
};

export default FeedItem;