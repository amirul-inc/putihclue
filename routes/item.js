const express = require('express');
const router = express.Router();

const ItemController = require('../controllers/Item')

/* POST Item . */
router.post('/item', ItemController.create)
/* GET Item Listing. */
router.get('/item', ItemController.getAll)
/* PUT Tenant Listing. */
// router.put('/tenant/:tenantId', TenantController.updateById)
/* GET/:id Tenant Listing. */
// router.get('/tenant/:tenantId', TenantController.getById)
/* Delete/:id Tenant Listing. */
// router.delete('/tenant/:tenantId', TenantController.deleteByid)

module.exports = router;
