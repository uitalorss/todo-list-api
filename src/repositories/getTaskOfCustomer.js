const knex = require("../connect");

const getTaskOfCustomer = async (taskId, customerId) => {
  const task = await knex("tasks").where({ id: taskId });
  if (task.length === 0 || task[0].customer_id !== customerId) {
    return false;
  }
  return true;
};

module.exports = { getTaskOfCustomer };
