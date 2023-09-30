const knex = require("../connect");

const getCustomerByEmail = async (email) => {
  return await knex("customers").where({ email: email }).first();
};

module.exports = { getCustomerByEmail };
