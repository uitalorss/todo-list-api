const {
  isEmailAlreadyExists,
} = require("../repositories/isEmailAlreadyExists");

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    if (await isEmailAlreadyExists(email)) {
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
