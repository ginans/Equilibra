// controller/getData/getDataAdmin.js
require('dotenv').config();
const { modelUserAdmin } = require("../../models/userAdmin/userAdmin");
const jwt = require("jsonwebtoken");

const getDataUserAdmin = async (req, res) => {
    try {
        const tokenAdmin = req.params.tokenAdmin;
        // Desencriptar el token para obtener el ID
        const decoded = jwt.verify(tokenAdmin, process.env.JWT_SECRET_ADMIN);
        const userId = decoded.id;

        // Obtener el usuario admin por su ID, excluyendo el campo 'password'
        const user = await modelUserAdmin.findByPk(userId, {
            attributes: { exclude: ['password'] }
        });

        if (!user) {
            return res.status(404).json({ message: 'admin no se encuentra' });
        }

        // Enviar la información del usuario
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error llamando data del admin', error });
    }
};

module.exports = {
    getDataUserAdmin
};
