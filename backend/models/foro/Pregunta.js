const { DataTypes } = require('sequelize');
const { db } = require('../../database/dataBase');
const { modelUserClient } = require('../../models/userClient/userClient');

const Pregunta = db.define('preguntas', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  timestamps: true,
});

// Definir la relación
Pregunta.belongsTo(modelUserClient, { as: 'usuario', foreignKey: 'userClientId' });

module.exports = { Pregunta };
