const { getTaskOfCustomer } = require("../repositories/getTaskOfCustomer");
const { updateTaskStatus } = require("../repositories/updateTaskStatus");

const editTaskStatus = async (req, res) => {
  const { idTask } = req.params;
  const { id } = req.user;

  try {
    const doesTaskBelongsToCustomer = await getTaskOfCustomer(idTask, id);
    if (!doesTaskBelongsToCustomer) {
      return res
        .status(400)
        .json({ message: "A Tarefa não existe ou não pertence ao usuário" });
    }
    await updateTaskStatus(idTask);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

module.exports = { editTaskStatus };
