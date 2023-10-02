require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getCustomerByEmail } = require("../repositories/getCustomerByEmail");
const { validatePassword } = require("../utils/validatePassword");

const loginCustomer = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await getCustomerByEmail(email);
    if (user.length === 0) {
      return res
        .status(400)
        .json({ message: "Usuário e/ou senha são inválidos." });
    }
    const isPasswordValid = await validatePassword(senha, user[0].password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ message: "Usuário e/ou senha são inválidos." });
    }
    const token = jwt.sign({ id: user[0].id }, process.env.JWT_KEY, {
      expiresIn: "15m",
    });
    return res
      .status(201)
      .json({ message: "Usuário logado com sucesso", token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { loginCustomer };
