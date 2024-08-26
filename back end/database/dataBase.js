const {Sequelize} =  require('sequelize');
// los 3 argumentos que espera Sequelize(nombebasedatos, username por defecto root, contrasena, por defecto nada)
const db = new Sequelize('equilibra','root','',{
    host:'localhost',
    dialect:'mysql',
    port:'3306'
});

module.exports = {  
    db: db
 }