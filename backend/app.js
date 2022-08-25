const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors

// importing routes
const indexRoutes = require("./routes/index");

// Loading routes
app.use(indexRoutes);

// Exportações
module.exports = app;
