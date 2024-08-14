import React from 'react';
import styles from '../../styles/noticias/Noticia.module.scss'; 

const Noticia = ({ titulo, url, descripcion, imagen }) => {
  return (
    <div className={styles.noticia} onClick={() => window.open(url, '_blank')}>
      <img src={imagen} alt={titulo} className={styles.noticiaImagen} />
      <div className={styles.noticiaContent}>
        <h3 className={styles.noticiaTitulo}>{titulo}</h3>
        <div className={styles.noticiaDescripcionContainer}>
          <p className={styles.noticiaDescripcion}>{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
