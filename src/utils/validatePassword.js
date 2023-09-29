const bcrypt = require("bcrypt");

const validatePassword = async (password, encryptedPassword) => {
  return await bcrypt.compare(password, encryptedPassword);
};

module.exports = { validatePassword };
