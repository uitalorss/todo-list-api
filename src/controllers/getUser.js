const { getUserById } = require("../repositories/getUserById");

const getUser = async (req, res) => {
  const { id } = req.user;

  try {
    const user = await getUserById(id);
    // eslint-disable-next-line no-unused-vars
    const { password: _, ...dataUser } = user;
    return res.status(200).json(dataUser);
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

module.exports = { getUser };
