const { DataTypes } = require('sequelize');
const {db}= require('../../database/dataBase'); 
const {modelUserClient} = require('../userClient/userClient'); 

const Pregunta = db.define('Pregunta', {
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
Pregunta.belongsTo(modelUserClient, { foreignKey: 'userClientId' });
modelUserClient.hasMany(Pregunta, { foreignKey: 'userClientId' });

module.exports = Pregunta;
