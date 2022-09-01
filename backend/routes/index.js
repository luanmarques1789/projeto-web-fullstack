const express = require('express');
const router = express.Router();
const { init, test } = require('../Controller/index');

router.get('/', init);

router.get('/testing', test);

module.exports = router;
