// models/noticiasModel.js

const { DataTypes } = require('sequelize');
const { db } = require('../../database/dataBase'); // Ajusta la ruta si es necesario

const Noticia = db.define('Noticia', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'noticias', // Asegúrate de que el nombre de la tabla sea correcto
  timestamps: false, // Si no usas timestamps en tu tabla
});

module.exports = Noticia;
