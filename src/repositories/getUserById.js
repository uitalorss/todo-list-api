const knex = require("../connect");

const getUserById = async (id) => {
  return await knex("customers").where({ id: id }).first();
};

module.exports = { getUserById };
