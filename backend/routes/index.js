const express = require("express");
const router = express.Router();
const { init, test } = require("../Controler/index");

router.get("/", init);

router.get("/testing", test);

module.exports = router;
