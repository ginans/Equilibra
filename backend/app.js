// backend/app.js
const express = require('express');
const cors = require('cors'); // Ajusta la ruta si es necesario
const { router } = require('./routes/routes');
const app = express();
const port = 8000;

app.use(cors()); // Permite solicitudes desde cualquier origen
app.use(express.json());

// Define las rutas con los controladores importados
app.use('/',router);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
