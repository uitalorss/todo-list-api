const knex = require("../connect");
const { getTaskById } = require("./getTaskById");

const updateTaskStatus = async (taskId) => {
  const task = await getTaskById(taskId);
  task.status === false
    ? await knex("tasks").update({ status: true }).where({ id: taskId })
    : await knex("tasks").update({ status: false }).where({ id: taskId });
  return;
};

module.exports = { updateTaskStatus };
