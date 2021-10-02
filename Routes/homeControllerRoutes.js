//this file holds the information about the route and their respective controllers

const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.getAll);
router.get('/home', homeController.getAll);
router.post('/home', homeController.newItem);
router.delete('/home', homeController.deleteAllItems);

router.get('/home/:name', homeController.getOneItem);
router.delete('/home/:name', homeController.deleteOneItem);




module.exports = router;