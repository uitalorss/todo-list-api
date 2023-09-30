const knex = require("../connect");

const updateUser = async (name, email, password, id) => {
  return await knex("customers")
    .update({ name, email, password })
    .where({ id });
};

module.exports = { updateUser };
