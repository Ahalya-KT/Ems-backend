//1- to laod .env file
require("dotenv").config();

// import mongoose mongo db node connection file
require("./DB-connection/connection");
// 2-import express server
const express = require("express");

// import router
const router = require("./Routes/router");

//3- import cors
const cors = require("cors");

//4-create express server
const emsServer = express();

// 5-use cors in server app
emsServer.use(cors());

//6-parse json to object
emsServer.use(express.json());

// use router
emsServer.use(router);

//7- customize port for server
const PORT = 4000 || process.env.PORT;

// 8-to run server app use listen
emsServer.listen(PORT, () => {
  console.log(`ems server started at port:${PORT}`);
});

//9- resolve request to localhost 4000
emsServer.get("/", (req, res) => {
  res.send(`<h1>ems server started and waiting for request</h1>`);
});
