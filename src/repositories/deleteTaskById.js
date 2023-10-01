const knex = require("../connect");

const deleteTaskById = async (taskId) => {
  return await knex("tasks").delete().where({ id: taskId });
};

module.exports = { deleteTaskById };
