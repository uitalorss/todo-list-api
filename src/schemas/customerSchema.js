const joi = require("joi");

const customerSchema = joi.object({
  name: joi.string().min(5).max(100).required({}),
  email: joi.string().email().required().messages({}),
  password: joi.string().min(5).max(20).required.messages({}),
});

module.exports = { customerSchema };
