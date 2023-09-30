const joi = require("joi");

const taskRequestSchema = joi.object({
  descricao: joi.string().required().trim().min(5).max(100).messages({
    "any.required": "O campo é obrigatório",
    "string.min": "Favor informar uma descrição maior",
    "string.max": "Favor informar uma descrição menor",
    "string.empty": "Favor informar uma descrição válido",
  }),
});

module.exports = { taskRequestSchema };
