const express = require('express');
const router = express.Router();

const ItemController = require('../controllers/Room');

/* POST Item . */
router.post('/item', ItemController.create)
/* GET Item Listing. */
router.get('/item', ItemController.getAll)
/* PUT Room Listing. */
router.put('/item/:roomId', ItemController.updateById)
/* GET/:id Room Listing. */
router.get('/item/:roomId', ItemController.getById)
/* Delete/:id Room Listing. */
router.delete('/item/:roomId', ItemController.deleteByid)

module.exports = router;
