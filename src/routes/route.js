const { Router } = require("express");
const { validateBody } = require("../middlewares/validateBody");
const { customerSchema } = require("../schemas/customerSchema");
const { createCustomer } = require("../controllers/createCustomer");
const { validateEmail } = require("../middlewares/validateEmail");
const { loginSchema } = require("../schemas/loginSchema");
const { loginCustomer } = require("../controllers/loginCustomer");
const { authenticateUser } = require("../middlewares/authenticateUser");
const { getCustomer } = require("../controllers/getCustomer");
const { editCustomer } = require("../controllers/editCustomer");
const { taskRequestSchema } = require("../schemas/taskRequestSchema");
const { createTask } = require("../controllers/createTask");
const { listTasks } = require("../controllers/listTasks");

const router = Router();

router.post(
  "/user",
  validateBody(customerSchema),
  validateEmail,
  createCustomer
);
router.post("/login", validateBody(loginSchema), loginCustomer);
router.use(authenticateUser);
router.get("/user", getCustomer);
router.put("/user", validateBody(customerSchema), editCustomer);
router.post("/task", validateBody(taskRequestSchema), createTask);
router.get("/tasks", listTasks);

module.exports = router;
