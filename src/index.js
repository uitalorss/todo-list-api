const { app } = require("./server");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("tamo aqui"));
