const { getTaskOfCustomer } = require("../repositories/getTaskOfCustomer");

const validateTaskofCustomer = async (req, res, next) => {
  const { idTask } = req.params;
  const { id } = req.user;

  try {
    const isTaskBelongsToCustomer = await getTaskOfCustomer(idTask, id);
    if (!isTaskBelongsToCustomer) {
      return res
        .status(400)
        .json({ message: "A Tarefa não existe ou não pertence ao usuário" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

module.exports = { validateTaskofCustomer };
