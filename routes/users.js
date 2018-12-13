const express = require('express');
const router = express.Router();

const UserController = require('../controllers/User')

/* GET users listing. */
router.post('/register', UserController.create)
router.get('/users', UserController.getAll)
router.post('/login', UserController.authenticated)

module.exports = router;
