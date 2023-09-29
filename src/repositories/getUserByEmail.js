const knex = require("../connect");

const getUserByEmail = async (email) => {
  return await knex("customers").where({ email: email }).first();
};

module.exports = { getUserByEmail };
