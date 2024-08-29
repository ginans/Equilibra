import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "../../../styles/noticias/createnoticia.module.scss";
import { useNavigate } from "react-router-dom";

const CreateNoticia = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imagen, setImagen] = useState("");
  const [url, setUrl] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !url || !description || !imagen) { 
      setMessage("Por favor, completa todos los campos antes de crear la noticia.");
      return;
    }

    fetch("http://localhost:8000/noticias", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, url, description, imagen }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Noticia creada:", data);
        setMessage("Noticia creada, redireccionando..."); 
        setTimeout(() => {
          navigate("/noticias"); 
        }, 3000);
      })
      .catch((error) => {
        console.error("Error al crear la noticia:", error);
        setMessage("Hubo un error al crear la noticia");
      });
  };

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
  ];

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Título de la noticia"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
        />
        <ReactQuill
          className={styles.content}
          value={description}
          onChange={setDescription}
          placeholder="Descripción de la noticia"
          modules={modules} 
          formats={formats}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="URL de la imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)} 
        />
        <input
          className={styles.input}
          type="text"
          placeholder="URL de la noticia"
          value={url}
          onChange={(e) => setUrl(e.target.value)} 
        />
        {message && <p className={styles.message}>{message}</p>} 
        <button className={styles.sendButton} type="submit">
          Crear noticia

        </button>
        <button
          type="button"
          className={styles.previewButton}
          onClick={() => setShowPreview(!showPreview)}
        >
          {showPreview ? "Ocultar Vista Previa" : "Mostrar Vista Previa"}
        </button>
      </form>

      {showPreview && (
        <div className={styles.preview}>
          <h2>{title}</h2>
          <div className={styles.previewImage}>
            {imagen && <img src={imagen} alt="Vista previa" width="500px" />}
          </div>
          <div
            className={styles.previewContent}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      )}
    </div>
  );
};

export default CreateNoticia;
