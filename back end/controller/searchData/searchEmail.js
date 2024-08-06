const { form } = require("../../models/userClient/userClient.js")

const checkEmail = async (req, res) => {
    const { email } = req.params; // Usa req.params para obtener el parámetro de la URL 

    if (!email) {
        return res.status(400).json({ message: 'Email parameter is required' });
    }

    try {
        // Busca el nombre de usuario en la base de datos usando el nombre correcto de la columna
        const user = await form.findOne({ where: { email: email } });
        // Envía una respuesta indicando si el usuario existe o no
        res.json({ exists: !!user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { checkEmail };
