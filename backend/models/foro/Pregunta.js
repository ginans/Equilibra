const { DataTypes } = require('sequelize');
const sequelize = require('../database'); 
const Usuario = require('./userClient'); 

const Pregunta = sequelize.define('Pregunta', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userClientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

// Asociaciones
Pregunta.belongsTo(Usuario, { foreignKey: 'userClientId' });
Usuario.hasMany(Pregunta, { foreignKey: 'userClientId' });

module.exports = Pregunta;
