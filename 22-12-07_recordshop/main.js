import express from "express";
import cors from "cors";

import albumRouter from "./routes/albumRouter.js";
import photoRouter from "./routes/photoRouter.js";

// import userRouter from "./router/userRouter.js";
const server = express();

const port = 1234;

server.use(express.json());

server.use(cors({ origin: "*" }));

server.use("/albums", albumRouter);
server.use("/photos", photoRouter);

// server.use("/user", userRouter);
server.use((req, res) => {
    res.status(404).send("Diese Seite gibt es nicht :(");
});

server.use((err, req, res, next) => {
    console.log("Ein Fehler ist aufgetreten", err);
    res.status(500).send("Es liegt nicht an dir sondern an mir...");
});

server.listen(port, () => console.log(`listening to port ${port}`));
