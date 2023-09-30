const getTasksByCustomer = require("../repositories/getTasksByCustomer");

const listTasks = async (req, res) => {
  const { id } = req.user;

  try {
    const tasks = await getTasksByCustomer(id);
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

module.exports = { listTasks };
