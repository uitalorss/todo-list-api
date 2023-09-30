const knex = require("../connect");

const insertTask = async (description, idCustomer) => {
  return await knex("tasks")
    .insert({ description, customer_id: idCustomer })
    .returning("*");
};

module.exports = { insertTask };
