const express = require('express');
const router = express.Router();

const TenantController = require('../controllers/Tenant')

/* POST Tenant . */
router.post('/tenant', TenantController.create)
/* GET Tenant Listing. */
router.get('/tenant', TenantController.getAll)
/* PUT Tenant Listing. */
router.put('/tenant/:tenantId', TenantController.updateById)
/* GET/:id Tenant Listing. */
router.get('/tenant/:tenantId', TenantController.getById)
/* Delete/:id Tenant Listing. */
router.delete('/tenant/:tenantId', TenantController.deleteByid)

module.exports = router;
