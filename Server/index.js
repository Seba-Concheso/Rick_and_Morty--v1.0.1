const express = require("express");
const server = express();
const router = require("./src/routes/index");
const morgan = require("morgan");
const port = 3001;
const {conn}= require("./src/dataBase/DB_connection");

server.use(express.json());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/rickandmorty", router); 

server.listen(port, async () => {
  console.log(`Server listening at ${port}`);
  await conn.sync({force: true});
});
