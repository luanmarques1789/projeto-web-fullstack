function init(req, res) {
	res.status(200).send({ message: "User's route!" });
}

module.exports = { init };
