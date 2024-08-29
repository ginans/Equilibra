// modelo Respuesta
const { DataTypes } = require('sequelize');
const { db } = require('../../database/dataBase');
const { Pregunta } = require('./Pregunta');
const { modelUserClient } = require('../userClient/userClient');

const Respuesta = db.define('respuestas', {
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
Respuesta.belongsTo(modelUserClient, { foreignKey: 'userProfessionalId', as: 'professional' });
modelUserClient.hasMany(Respuesta, { foreignKey: 'userProfessionalId', as: 'professionalResponses' });

Respuesta.belongsTo(Pregunta, { foreignKey: 'preguntaId', as: 'question' });
Pregunta.hasMany(Respuesta, { foreignKey: 'preguntaId', as: 'responses' });

module.exports = { Respuesta };
