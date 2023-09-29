require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getUserById } = require("../repositories/getUserById");

const authenticateUser = async (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.replace("Bearer", " ").trim();
  const { id } = jwt.verify(token, process.env.JWT_KEY);

  try {
    const user = await getUserById(id);
    if (user.length < 1) {
      return res.status(401).json({ message: "Usuário não autenticado" });
    }
    // eslint-disable-next-line no-unused-vars
    const { password: _, ...dataUser } = user;
    req.user = dataUser;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

module.exports = { authenticateUser };
