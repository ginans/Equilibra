const { db } = require("../../database/dataBase");
const { DataTypes } = require("sequelize");

const modelUserProfessional = db.define('userProfessionals', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  rut: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  registerSis: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  specialty: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
});

module.exports = {  
    modelUserProfessional 
}

