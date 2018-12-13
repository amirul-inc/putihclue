const express = require('express');
const router = express.Router();

const UserController = require('../controllers/User')

/* GET users listing. */
router.post('/register', UserController.create)
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
