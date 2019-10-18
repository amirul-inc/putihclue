const express = require('express');
const router = express.Router();

const GuestController = require('../controllers/Guest')

/* POST Guest . */
router.post('/guest', GuestController.create)
/* PUT Guest . */
router.put('/:guestId', GuestController.updateById)
/* DELETE Guest . */
router.put('/:guestId', GuestController.deleteByid)
/* GET Guest Listing. */
router.get('/guest', GuestController.getAll)

module.exports = router;
