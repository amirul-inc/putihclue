const express = require('express');
const router = express.Router();

const UserController = require('../controllers/User')

/* POST users . */
router.post('/register', UserController.create)
/* GET users listing. */
router.get('/users', UserController.getAll)
/* Login userrs. */
router.post('/login', UserController.authenticated)

module.exports = router;
