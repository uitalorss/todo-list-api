const { verifyIfEmailExits } = require("../repositories/verifyIfEmailExits");

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    const isEmailAlreadyExists = verifyIfEmailExits(email);
    if (isEmailAlreadyExists) {
      return res
        .status(400)
        .json({ message: "Favor informar um email válido" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

module.exports = { validateEmail };
