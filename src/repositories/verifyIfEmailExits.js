const knex = require("../connect");

const verifyIfEmailExits = async (email) => {
  const isEmailExistsInData = await knex("customers").where({ email: email });
  return isEmailExistsInData.length > 0 ? true : false;
};

module.exports = { verifyIfEmailExits };
