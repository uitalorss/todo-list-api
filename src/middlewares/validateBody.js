const validateBody = (joiSchema) => async (req, res, next) => {
  try {
    joiSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { validateBody };