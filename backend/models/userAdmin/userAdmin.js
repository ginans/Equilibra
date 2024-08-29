const { db } = require('../../database/dataBase');
const { DataTypes } = require('sequelize');

const modelUserAdmin = db.define('userAdmins', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
       
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

module.exports = { modelUserAdmin };
