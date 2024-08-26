require("dotenv").config();

const { Sequelize } = require("sequelize");
// los 3 argumentos que espera Sequelize(nombebasedatos, username por defecto root, contrasena, por defecto nada)
const db = new Sequelize(
  process.env.NAME_DB,
  process.env.USER_DB,
  process.env.PASSWORD_DB,

  {
    host: process.env.HOST_DB,
    dialect: "mysql",
    port: "3306",
  }
);

db.authenticate()
  .then(() => {
    console.log("Conectado a la db MySQL con Sequelize.");
  })
  .catch((err) => {
    console.error("Error conectándose con la db:", err);
  });

module.exports = {
  db: db,
};
