const bcrypt = require("bcrypt");
const { insertCustomer } = require("../repositories/insertCustomer");

const createCustomer = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const encryptedPassword = await bcrypt.hash(senha, 10);
    await insertCustomer(nome, email, encryptedPassword);
    return res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

module.exports = { createCustomer };
