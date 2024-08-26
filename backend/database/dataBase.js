const { Sequelize } = require("sequelize");
// los 3 argumentos que espera Sequelize(nombebasedatos, username por defecto root, contrasena, por defecto nada)
const db = new Sequelize(
  "bvaxsl6t1xlfuwit2he0",
  "uxb6vijxqolrg7ao",
  "dbvyqDj3wv0sh3VMU4Ci",
  {
    host: "bvaxsl6t1xlfuwit2he0-mysql.services.clever-cloud.com",
    dialect: "mysql",
    port: "3306",
  }
);

db.authenticate()
  .then(() => {
    console.log('Conectado a la db MySQL con Sequelize.');
  })
  .catch(err => {
    console.error('Error conectándose con la db:', err);
  });

module.exports = {
  db: db,
};