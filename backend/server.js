const express = require("express");//aqui
const mysql = require("mysql");
const cors = require("cors");

//creo el servidor
const app = express(); //la app usa express, framework de node
const port = 5000;

app.use(cors()); //permite interactuar con el front
app.use(express.json()); //paso a json para que mi servidor entienda los mensajes

const db = mysql.createConnection({//database
  //me conecto a la base de datos
  host: "bvaxsl6t1xlfuwit2he0-mysql.services.clever-cloud.com", //el puerto de mi db
  user: "uxb6vijxqolrg7ao", // nombre de usuario de mi db
  password: "dbvyqDj3wv0sh3VMU4Ci", // Contraseña de la misma
  database: "bvaxsl6t1xlfuwit2he0", //nombre de la db
});

//console logs para manejar posibles errores al conectar 
db.connect((err) => {
  if (err) {
    console.error("Error conectandose con la db:", err);
    return;
  }
  console.log("Conectado a la db MySQL.");
});

//la ruta para obtener los articulos
app.get("/api/articles", (req, res) => {
  db.query("SELECT * FROM articles", (err, results) => {
    if (err) {
      console.error("Error al obtener los articulos:", err);
      res.status(500).send("Error al obtener los articulos");
      return;
    }
    res.json(results);
  });
});

//ruta para añadir nuevos articulos
app.post("/api/articles", (req, res) => {
  const { title, content, image } = req.body;
  db.query(
    "INSERT INTO articles (title, content, image) VALUES (?, ?, ?)",
    [title, content, image],
    (err, results) => {
      if (err) {~
        console.error("Error inserting article:", err);
        res.status(500).send("Error inserting article");
        return;
      }
      res.status(201).json({ id: results.insertId, title, content, image });
    }
  );
});

//ruta de full articles
app.get("/api/articles/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM articles WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Error al obtener el artículo:", err);
      res.status(500).send("Error al obtener el artículo");
      return;
    }
    if (results.length === 0) {
      res.status(404).send("Artículo no encontrado");
      return;
    }
    res.json(results[0]);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});