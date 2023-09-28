const Router = require("express");
const { validateBody } = require("../middlewares/validateBody");
const { customerSchema } = require("../schemas/customerSchema");
const { createCostumer } = require("../controllers/createCustomer");

const router = Router();

router.post("/user", validateBody(customerSchema), createCostumer);
