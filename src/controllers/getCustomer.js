const { getCustomerById } = require("../repositories/getCustomerById");

const getCustomer = async (req, res) => {
  const { id } = req.user;

  try {
    const user = await getCustomerById(id);
    // eslint-disable-next-line no-unused-vars
    const { password: _, ...dataUser } = user;
    return res.status(200).json(dataUser);
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

module.exports = { getCustomer };
