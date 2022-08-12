const mongoose = require('mongoose');
const app = require('./app');
const {
	SERVER_PORT,
	DB_NAME,
	DB_USER,
	DB_PASSWORD,
	HOST,
} = require('./constants');

mongoose.Promise = global.Promise;

const uri = `mongodb://${DB_USER}:${DB_PASSWORD}@${HOST}`;
// Conexão com o banco de dados
mongoose
	.connect(uri, { dbName: DB_NAME })
	.then(() => {
		console.log('The connection was established successfully!');

		// Estabelecendo conexão com o servidor
		app.listen(SERVER_PORT, () => {
			console.log(`Server running on: http://localhost:${SERVER_PORT}`);
		});
	})
	.catch((err) => console.log(err));
