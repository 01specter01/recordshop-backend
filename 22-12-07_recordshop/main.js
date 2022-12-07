import express from "express";
import userRouter from "./router/userRouter.js";


const app = express();

const port = 1234;

app.use(express.json());

app.use("/user", userRouter);

app.listen(port, () => console.log(`listening to port ${port}`));
