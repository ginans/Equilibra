require('dotenv').config();
const { modelUserClient } = require("../../models/userClient/userClient");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken") 

const loginUserClient = async ( req, res ) => {
    const { email, password } = req.body;  
    const user = await modelUserClient.findOne({ where: { email: email } });
    if (!user) {
        return res.status(409).json({ message: "No existe este email" });
    } 
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(409).json({ message: "Contraseña incorrecta" });
    }
    const token = await jwt.sign({ id : user.id }, process.env.JWT_SECRET  ,{ expiresIn: '1d' }); 
    if(!token){
        return res.status(400).json({message : "no funciono el token"})
    }
    return res.status(200).json({token}) 
}


module.exports = {
    loginUserClient : loginUserClient
}