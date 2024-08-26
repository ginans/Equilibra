const { DataTypes } = require('sequelize');
const { db } = require('../../database/dataBase');  
const { modelUserClient } = require('./../userClient/userClient'); 
const Pregunta  = require('./Pregunta');
const Respuesta = require('./Respuesta');

// Definir el modelo de Likes
const Likes = db.define('Likes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

  userClientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: modelUserClient,
      key: 'id',
    },
  },
  userProfessionalId: {
    type: DataTypes.INTEGER,
    allowNull: false,  // Asumiendo que este campo es obligatorio
    references: {
      model: modelUserClient,
      key: 'id',
    },
  },
  preguntaId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Pregunta,
      key: 'id',
    },
  },
  respuestaId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Respuesta,
      key: 'id',
    },
  },
}, {
  timestamps: true,  // Esto automáticamente incluye las columnas `createdAt` y `updatedAt`
});


// Asociaciones
Likes.belongsTo(modelUserClient, { foreignKey: 'userClientId' });
modelUserClient.hasMany(Likes, { foreignKey: 'userClientId' });

Likes.belongsTo(modelUserClient, { foreignKey: 'userProfessionalId' });
modelUserClient.hasMany(Likes, { foreignKey: 'userProfessionalId' });

Likes.belongsTo(Pregunta, { foreignKey: 'preguntaId', allowNull: true });
Pregunta.hasMany(Likes, { foreignKey: 'preguntaId' });

Likes.belongsTo(Respuesta, { foreignKey: 'respuestaId' });
Respuesta.hasMany(Likes, { foreignKey: 'respuestaId' });


module.exports = Likes;
