const { getTaskById } = require("../repositories/getTaskById");
const { getTaskOfCustomer } = require("../repositories/getTaskOfCustomer");

const getTask = async (req, res) => {
  const { idTask } = req.params;
  const { id } = req.user;

  try {
    const doesTaskBelongsToCustomer = await getTaskOfCustomer(idTask, id);
    if (!doesTaskBelongsToCustomer) {
      return res
        .status(400)
        .json({ message: "A Tarefa não existe ou não pertence ao usuário" });
    }
    const task = await getTaskById(idTask);
    return res.status(200).json(task);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

module.exports = { getTask };
