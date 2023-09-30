const knex = require("../connect");

const getTaskOfCustomer = async (taskId, customerId) => {
  const task = await knex("tasks").where({ id: taskId }).first();
  if (task.length === 0 || task.customer_id !== customerId) {
    return false;
  }
  return true;
};

module.exports = { getTaskOfCustomer };
