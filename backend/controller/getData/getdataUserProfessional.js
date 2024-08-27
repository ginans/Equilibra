require('dotenv').config();
const { modelUserProfessional } = require("../../models/userProfessional/userProfessional.js");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken") 

const getUserProfessionalById = async (req, res) => {
    try {
        const token = req.params.token;
        console.log("1",token)
        // Desencriptar el token para obtener el ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET_PROFESSION); 
        console.log("2",decoded)
        const userId = decoded.id;
        console.log("3",decoded.id)
        // Obtener el usuario por su ID, excluyendo el campo 'password'
        const user = await modelUserProfessional.findByPk(userId, {
            attributes: { exclude: ['password'] }
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Enviar la información del usuario
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user data', error });
    }
};


module.exports = {
    getUserProfessionalById
};
