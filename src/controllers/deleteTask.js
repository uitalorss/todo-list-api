const { deleteTaskById } = require("../repositories/deleteTaskById");
const { getTaskOfCustomer } = require("../repositories/getTaskOfCustomer");

const deleteTask = async (req, res) => {
  const { idTask } = req.params;
  const { id } = req.user;

  try {
    const doesTaskBelongsToCustomer = await getTaskOfCustomer(idTask, id);
    if (!doesTaskBelongsToCustomer) {
      return res
        .status(400)
        .json({ message: "A Tarefa não existe ou não pertence ao usuário" });
    }
    await deleteTaskById(idTask);
    return res.status(204).send();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

module.exports = { deleteTask };
