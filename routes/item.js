const express = require('express');
const router = express.Router();

const ItemController = require('../controllers/Room');

/* POST Item . */
router.post('/room', ItemController.create)
/* GET Item Listing. */
router.get('/room', ItemController.getAll)
/* PUT Room Listing. */
router.put('/room/:roomId', ItemController.updateById)
/* GET/:id Room Listing. */
router.get('/room/:roomId', ItemController.getById)
/* Delete/:id Room Listing. */
router.delete('/room/:roomId', ItemController.deleteByid)

module.exports = router;
