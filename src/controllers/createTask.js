const { insertTask } = require("../repositories/insertTask");

const createTask = async (req, res) => {
  const { descricao } = req.body;
  const { id } = req.user;

  try {
    const task = await insertTask(descricao.trim(), id);
    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

module.exports = { createTask };
