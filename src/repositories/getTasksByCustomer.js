const knex = require("../connect");

const getTasksByCustomer = async (customerId) => {
  return await knex("tasks")
    .select("description", "status", "created_at")
    .where({ customer_id: customerId });
};

module.exports = getTasksByCustomer;
