const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/EventOrder')

/* POST Item . */
router.post('/event/order', OrderController.create)
/* GET Item Listing. */
router.get('/event/order', OrderController.getAll)
/* DELETE Item Listing. */
router.delete('/event/:orderId', OrderController.deleteByid)

module.exports = router;
