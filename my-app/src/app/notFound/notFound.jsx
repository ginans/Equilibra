import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import imagen from './imagen/imagen.png';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div style={styles.container}>
      <img src={imagen} alt="Página no disponible" style={styles.imagen} />
      <h1>Página no disponible</h1>
      <p>Redireccionando a la página principal en 5 segundos...</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    backgroundColor: '#007089',
  },
  imagen: {
    width: '200px',
    height: 'auto',
  },
};

export default NotFoundPage;
