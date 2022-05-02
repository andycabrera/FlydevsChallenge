const express = require('express');
const beers = require('../api/beers/routes');

const router = express.Router();
router.use('/beers', beers);

module.exports = router;
