import React, { useState } from 'react';
import styles from "../../../../styles/EducationPage/EducationPage.module.scss"

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content, image })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Artículo creado:', data);
      })
      .catch(error => {
        console.error('Error al crear el artículo:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.input} type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className={styles.input} placeholder="Contenido" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <input className={styles.input} type="text" placeholder="URL de la imagen" value={image} onChange={(e) => setImage(e.target.value)} />
      <button className={styles.sendButton} type="submit" >Crear Artículo</button>
    </form>
  );
};

//agregar redirección del boton a la educationpage

export default CreateArticle;