const express = require('express');
const router = express.Router();
const {controller1} = require('../controllers/controller1');

router.get('/cont1', controller1)

module.exports = router;