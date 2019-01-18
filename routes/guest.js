const express = require('express');
const router = express.Router();

const GuestController = require('../controllers/Guest')

/* POST Guest . */
router.post('/guest', GuestController.create)
/* GET Guest Listing. */
router.get('/guest', GuestController.getAll)

module.exports = router;
