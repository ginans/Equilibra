// modelo Likes
const { DataTypes } = require('sequelize');
const { db } = require('../../database/dataBase');
const { modelUserClient } = require('../userClient/userClient');
const { Pregunta } = require('./Pregunta');
const { Respuesta } = require('./Respuesta');

const Likes = db.define('likes', {
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
        allowNull: false,
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
    timestamps: true,
});

// Asociaciones con alias para evitar conflictos
Likes.belongsTo(modelUserClient, { foreignKey: 'userClientId', as: 'client' });
modelUserClient.hasMany(Likes, { foreignKey: 'userClientId', as: 'clientLikes' });

Likes.belongsTo(modelUserClient, { foreignKey: 'userProfessionalId', as: 'professional' });
modelUserClient.hasMany(Likes, { foreignKey: 'userProfessionalId', as: 'professionalLikes' });

Likes.belongsTo(Pregunta, { foreignKey: 'preguntaId', as: 'question' });
Pregunta.hasMany(Likes, { foreignKey: 'preguntaId', as: 'questionLikes' });

Likes.belongsTo(Respuesta, { foreignKey: 'respuestaId', as: 'answer' });
Respuesta.hasMany(Likes, { foreignKey: 'respuestaId', as: 'answerLikes' });

module.exports = { Likes };
