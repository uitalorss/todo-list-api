const knex = require("../connect");

const getTaskById = async (taskId) => {
  const task = await knex("tasks").where({ id: taskId }).first();
  return task;
};

module.exports = { getTaskById };
