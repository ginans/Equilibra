const jwt = require("jsonwebtoken");
const { modelUserAdmin } = require("../../models/userAdmin/userAdmin");

const loginUserAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await modelUserAdmin.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });
    if (password !== user.password){
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_ADMIN, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { loginUserAdmin };
