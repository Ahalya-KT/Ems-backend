// import mongoose
const mongoose = require("mongoose");

const connectionString = process.env.DATABASE;

mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlparser: true,
  })
  .then((data) => {
    console.log("mongodb altas connected to ems server....");
  })
  .catch((err) => {
    console.log("monodb connection failed");
  });
