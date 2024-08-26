const { modelUserProfessional } = require("../../../models/userProfessional/userProfessional.js")

const checkNameUserProfessional = async (req, res) => {
    const { name } = req.params; // Usa req.params para obtener el parámetro de la URL 
    if (!name) {
        return res.status(400).json({ message: 'Name parameter is required' });
    } 
    try {
        // Busca el nombre de usuario en la base de datos usando el nombre correcto de la columna
        const user = await modelUserProfessional.findOne({ where: { userName: name } }); 
        // Envía una respuesta indicando si el usuario existe o no
        res.json({ exists: !!user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { checkNameUserProfessional };