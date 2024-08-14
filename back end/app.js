const express = require("express");
// const serverless = require("serverless-http");
const cors = require('cors');
const app = express();
const { router }= require('./routes/routes')
app.use(cors())
app.use(express.json());
app.use('/', router) 


const port = 8000; 
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});