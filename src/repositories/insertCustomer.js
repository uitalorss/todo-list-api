const knex = require("../connect");

const insertCustomer = async (name, email, password) => {
  return await knex("customers")
    .insert({ name, email, password })
    .returning("*");
};

module.exports = { insertCustomer };
