require('dotenv').config();
const SERVER_PORT = process.env.SERVER_PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.HOST;
const DB_NAME = process.env.DB_NAME;
module.exports = { SERVER_PORT, DB_USER, DB_PASSWORD, HOST, DB_NAME };
