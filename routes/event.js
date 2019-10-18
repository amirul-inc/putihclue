const express = require('express');
const router = express.Router();

const EventController = require('../controllers/Event')

/* POST Event . */
router.post('/event', EventController.create)

/* PUT Event . */
router.put('/:eventId', EventController.updateById)
/* GET Event Listing. */
router.get('/event', EventController.getAll)
/* PUT Event Listing. */

/* Delete/:id Event Listing. */
router.delete('/event/:eventId', EventController.deleteByid)

module.exports = router;
