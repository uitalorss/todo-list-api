const knex = require("../connect");

const getCustomerById = async (id) => {
  return await knex("customers").where({ id: id }).first();
};

module.exports = { getCustomerById };
