const { modelUserProfessional } = require("../../models/userProfessional/userProfessional") ;
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const createUserProfessional = async (req, res) => {
    try { 
      const { userName, password, age,  specialty, rut,registerSis, email } = req.body;  
      if (!userName || !password || !age || !rut || !specialty || !registerSis || !email) {
        return res.status(400).json({ message: "Faltan datos" });
      }  
      const existingUser = await modelUserProfessional.findOne({ where: { userName: userName } });
      if (existingUser) {
        return res.status(409).json({ message: "Ya existe un usuario con ese nombre" });
      }   
      const existingEmail = await modelUserProfessional.findOne({ where: { email: email } });
      if (existingEmail) {
        return res.status(409).json({ message: "Ya existe un usuario con ese email" });
      } 
      const encrypt =  await bcrypt.hash(password, 12)
      console.log(encrypt) 
     if(encrypt){   
      const newUser = await modelUserProfessional.create({ userName: userName, password: encrypt, age: age, rut:rut, specialty:specialty, registerSis:registerSis, email:email}); 
      const token = await jwt.sign({ id : newUser.id }, process.env.JWT_SECRET_PROFESSION,{ expiresIn: '1d' }); 
      return  res.status(200).json({ token });
    }    
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ message: "Error interno del servidor", error: error.message });
    }
  };


  module.exports = {
   createUserProfessional : createUserProfessional
}