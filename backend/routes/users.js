const express = require('express');
const router = express.Router();
const { init } = require('../Controller/users');

router.get('/users', init);

module.exports = router;
