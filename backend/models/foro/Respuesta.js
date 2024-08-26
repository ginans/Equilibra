const { DataTypes } = require('sequelize');
const sequelize = require('../database');  
const Usuario = require('./userProfessional'); 
const Pregunta = require('./Pregunta');

// Definir el modelo de Respuesta
const Respuesta = sequelize.define('Respuesta', {
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

// Asociaciones
Respuesta.belongsTo(Usuario, { foreignKey: 'userProfessionalId' });
Usuario.hasMany(Respuesta, { foreignKey: 'userProfessionalId' });

Respuesta.belongsTo(Pregunta, { foreignKey: 'preguntaId' });
Pregunta.hasMany(Respuesta, { foreignKey: 'preguntaId' });

module.exports = Respuesta;
