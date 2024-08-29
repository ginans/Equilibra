import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Noticia from './Noticia'; 
import styles from '../../styles/noticias/Noticia.module.scss'; 
import useCheckAdmin from '../../hooks/useCheckAdmin';

const ListaNoticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isAdminLogged= useCheckAdmin();

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await axios.get('http://localhost:8000/noticias');
        setNoticias(response.data);
        if (response) {
          console.log(response.data.image);
        }
      } catch (err) {
        setError('Error al cargar las noticias');
        console.error('Error al obtener las noticias:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.contenedorNoticias}>
      {isAdminLogged ? (
      <div className={styles.postBox}>
        <a href="/createNoticia" className={styles.postButton}>
          Publicar Noticia
        </a>
      </div>
    ):(
      <></>
    )}

      <div className={styles.tarjetaContenedor}>
        {noticias.slice().reverse().map((noticia) => (
          <Noticia
            key={noticia.id}
            titulo={noticia.title}
            url={noticia.url}
            descripcion={noticia.description}
            imagen={noticia.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ListaNoticias;
