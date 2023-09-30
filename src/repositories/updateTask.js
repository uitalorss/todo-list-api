const knex = require("../connect");

const updateTask = async (description, taskId) => {
  return await knex("tasks").update({ description }).where({ id: taskId });
};

module.exports = { updateTask };
