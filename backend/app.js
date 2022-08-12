const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors

// Loading routes
app.get('/', (req, res) => {
	res.status(200).send({
		message: 'Hello world!',
	});
});

app.get('/testing', (req, res) => {
	res.status(200).send({
		message: 'Testing node server!',
	});
});

// Exportações
module.exports = app;
