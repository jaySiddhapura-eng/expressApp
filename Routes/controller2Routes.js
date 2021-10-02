const express = require('express');
const router = express.Router();
const {controller2} = require('../controllers/controller2');

router.get('/cont2', controller2)

module.exports = router;