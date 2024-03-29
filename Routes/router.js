const express = require("express");

const usercontroller = require("../controller/usercontroller");
const multerConfig = require("../middleware/multermiddleware");

const router = new express.Router();

router.post("/add", multerConfig.single("profile"), usercontroller.addUser);

module.exports = router;
