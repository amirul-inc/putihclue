const express = require('express');
const router = express.Router();

const TenantController = require('../controllers/Tenant')

/* POST Tenant . */
router.post('/tenant', TenantController.create)
/* GET Tenant Listing. */
router.get('/tenant', TenantController.getAll)

module.exports = router;
