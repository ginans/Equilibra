const { modelUserClient } = require("../../models/userClient/userClient.js")
// const { Sequelize } = require("sequelize");   
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')  

const createUsuario = async (req, res) => {
    try { 
      const { userName, password, age, height, chronicDiseases, weight, email } = req.body; 
      if (!userName || !password || !age || !height || !chronicDiseases || !weight || !email) {
        return res.status(400).json({ message: "Faltan datos" });
      } 
      const existingUser = await modelUserClient.findOne({ where: { userName: userName } });
      if (existingUser) {
        return res.status(409).json({ message: "Ya existe un usuario con ese nombre" });
      }  
      const existingEmail = await modelUserClient.findOne({ where: { email: email } });
      if (existingEmail) {
        return res.status(409).json({ message: "Ya existe un usuario con ese email" });
      }
      const encrypt =  await bcrypt.hash(password, 12)  
     if(encrypt){  
      const newUser = await modelUserClient.create({ userName: userName, password: encrypt, age: age, height:height, chronicDiseases:chronicDiseases, weight:weight, email:email}); 
      const token = await jwt.sign({ id : newUser.id }, process.env.JWT_SECRET  ,{ expiresIn: '1d' }); 
      return  res.status(200).json({ token });
    }    
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ message: "Error interno del servidor", error: error.message });
    }
  };

module.exports = { 
    createUsuario:createUsuario
}