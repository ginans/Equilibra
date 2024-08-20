import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "../../../../styles/EducationPage/CreateArticle.module.scss";
import { useNavigate } from "react-router-dom";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !content || !image){//verifico si los campos estan vacios
      setMessage("Por favor, completa todos los campos antes de crear el artículo.");
      return;
    }

    fetch("http://localhost:5000/api/articles", {//llamo a mi api
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, image }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Artículo creado:", data);
        setMessage("Artículo creado, redireccionando...");// mensaje para mostrar que se creo el articulo
        setTimeout(() => {
          navigate("/educationalPage");//para redireccionar en 3 s
        }, 3000);
      })
      .catch((error) => {
        console.error("Error al crear el artículo:", error);
        setMessage("Hubo un error al crear el artículo");
      });
  };

  const modules = {//las herramientas que quiero en mi barra de herramientas
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

  const formats = [//formato de herramientas
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
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}//para que el value cambie al escribir en el input
        />
        <ReactQuill //barra de herramientas
          className={styles.content}
          value={content}
          onChange={setContent}
          placeholder="Contenido"
          modules={modules}//herramientas modules
          formats={formats}//herramientas formats
        />
        <input
          className={styles.input}
          type="text"
          placeholder="URL de la imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}//para que el value cambie al escribir en el input
        />
        {message && <p className={styles.message}>{message}</p>} {/*aqui se muestra el mensaje de alerta/informacion*/}
        <button className={styles.sendButton} type="submit">
          Crear Artículo
        </button>
        <button
          type="button"
          className={styles.previewButton}
          onClick={() => setShowPreview(!showPreview)}
        >{/* para mostrar o no el preview */}
          {showPreview ? "Ocultar Vista Previa" : "Mostrar Vista Previa"}{/*para cambiar el mensaje el boton preview */}
        </button>
      </form>

      {/* para mostrar o no el preview */}
      {showPreview && (
        <div className={styles.preview}>
          <h2>{title}</h2>
          <div className={styles.previewImage}>
            {image && <img src={image} alt="Vista previa" width="500px" />}
          </div>
          <div
            className={styles.previewContent}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      )}
    </div>
  );
};

export default CreateArticle;
