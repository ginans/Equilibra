import React from 'react';
import styles from '../../styles/noticias/Noticia.module.scss'; 

const Noticia = ({ titulo, url, descripcion, imagen }) => {
  return (
    <div className={styles.noticiaCard}>
      <img src={imagen} alt={titulo} className={styles.noticiaImagen} />
      <h3 className={styles.noticiaTitulo}>{titulo}</h3>
      <p className={styles.noticiaDescripcion}>{descripcion}</p>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.noticiaLink}
      >
        Leer más
      </a>
    </div>
  );
};

export default Noticia;
