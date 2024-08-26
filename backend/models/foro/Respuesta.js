// models/Respuesta.js
const { DataTypes } = require('sequelize');
const { db } = require('../../database/dataBase');
const Pregunta = require('./Pregunta');
const { modelUserClient } = require('../userClient/userClient');

const Respuesta = db.define('Respuesta', {
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
Respuesta.belongsTo(modelUserClient, { foreignKey: 'userProfessionalId' });
modelUserClient.hasMany(Respuesta, { foreignKey: 'userProfessionalId' });

Respuesta.belongsTo(Pregunta, { foreignKey: 'preguntaId' });
Pregunta.hasMany(Respuesta, { foreignKey: 'preguntaId' });

module.exports = Respuesta;
