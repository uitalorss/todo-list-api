const knex = require("../connect");

const isEmailAlreadyExists = async (email) => {
  const isEmailExistsInData = await knex("customers").where({ email: email });
  return isEmailExistsInData.length > 0 ? true : false;
};

module.exports = { isEmailAlreadyExists };
