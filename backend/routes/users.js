const express = require("express");
const router = express.Router();
const { init } = require("../Controler/users");

router.get("/users", init);

module.exports = router;
