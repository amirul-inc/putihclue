const express = require('express');
const router = express.Router();

const EventController = require('../controllers/Event')

/* POST Event . */
router.post('/event', EventController.create)
/* GET Event Listing. */
router.get('/event', EventController.getAll)
/* PUT Event Listing. */
// router.put('/tenant/:tenantId', EventController.updateById)
/* GET/:id Event Listing. */
// router.get('/tenant/:tenantId', EventController.getById)
/* Delete/:id Event Listing. */
router.delete('/event/:eventId', EventController.deleteByid)

module.exports = router;
