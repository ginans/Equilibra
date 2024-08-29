// models/videoModel.js
const { DataTypes } = require('sequelize');
const { db } = require('../../database/dataBase');

const Video = db.define('Video', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  video_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'galeriaEntrenamiento', // Asegúrate de que el nombre de la tabla esté definido aquí
  timestamps: false // Si no usas timestamps en tu tabla
});

module.exports = Video;
