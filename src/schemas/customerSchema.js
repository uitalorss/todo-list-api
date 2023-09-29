const joi = require("joi");

const customerSchema = joi.object({
  nome: joi.string().min(5).max(100).required().trim().messages({
    "any.required": "O campo nome é obrigatório",
    "string.min": "Favor informar um nome maior",
    "string.max": "Favor informar um nome menor",
    "string.empty": "Favor informar um nome válido",
  }),
  email: joi.string().email().required().messages({
    "any.required": "O campo email é obrigatório",
    "string.email": "Informe um email válido.",
  }),
  senha: joi.string().min(5).max(20).required().trim().messages({
    "any.required": "O campo senha é obrigatório",
    "string.min": "Favor informar uma senha maior",
    "string.max": "Favor informar uma senha menor",
    "string.empty": "Favor informar uma senha válida",
  }),
});

module.exports = { customerSchema };
