const { Router } = require("express");
const { validateBody } = require("../middlewares/validateBody");
const { customerSchema } = require("../schemas/customerSchema");
const { createCustomer } = require("../controllers/createCustomer");
const { validateEmail } = require("../middlewares/validateEmail");
const { loginSchema } = require("../schemas/loginSchema");
const { loginCustomer } = require("../controllers/loginCustomer");

const router = Router();

router.post(
  "/user",
  validateBody(customerSchema),
  validateEmail,
  createCustomer
);

router.post("/login", validateBody(loginSchema), loginCustomer);

module.exports = router;
