const knex = require("../connect");

const getTasksByCustomer = async (customerId) => {
  return await knex("tasks")
    .select("id", "description", "status", "created_at")
    .where({ customer_id: customerId });
};

module.exports = getTasksByCustomer;
