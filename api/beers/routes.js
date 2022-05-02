const express = require('express')
const controller = require('./controller')

const router = express.Router();

router.post('/findTwoBeers', controller.findTwoBeers);

module.exports = router;