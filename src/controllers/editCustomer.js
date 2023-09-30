const bcrypt = require("bcrypt");
const { getUserByEmail } = require("../repositories/getUserByEmail");
const { updateUser } = require("../repositories/updateUser");

const editCustomer = async (req, res) => {
  const { nome, email, senha } = req.body;
  const { user } = req;
  try {
    if (email !== user.email) {
      const isEmailAlreadyExists = await getUserByEmail(user.email);
      if (isEmailAlreadyExists) {
        return res
          .status(400)
          .json({ message: "Favor informar um email válido" });
      }
    }
    const encryptedPassword = await bcrypt.hash(senha, 10);
    await updateUser(nome, email, encryptedPassword, user.id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

module.exports = { editCustomer };
