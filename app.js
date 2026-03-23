const express = require("express");
let app = express();
const userRouter = require("./route/userRouter")
app.use(express.json());
app.use("/user",userRouter)

app.listen(8000, () => console.log("Express server has started"));
