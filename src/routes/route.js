const { Router } = require("express");
const { validateBody } = require("../middlewares/validateBody");
const { customerSchema } = require("../schemas/customerSchema");
const { createCostumer } = require("../controllers/createCustomer");
const { validateEmail } = require("../middlewares/validateEmail");

const router = Router();

router.post(
  "/user",
  validateBody(customerSchema),
  validateEmail,
  createCostumer
);

module.exports = router;
