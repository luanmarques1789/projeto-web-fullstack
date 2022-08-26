function init(req, res) {
  res.send(200, { message: "User's route!" });
}

module.exports = { init };
