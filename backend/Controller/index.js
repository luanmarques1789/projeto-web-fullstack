function init(req, res) {
  res.status(200).send({
    message: "Hello world!",
  });
}

function test(req, res) {
  res.status(200).send({
    message: "Testing node server!",
  });
}

module.exports = { init, test };
