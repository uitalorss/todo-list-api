const knex = require("../connect");

const getCustomerByEmail = async (email) => {
  return await knex("customers").where({ email: email });
};

module.exports = { getCustomerByEmail };
