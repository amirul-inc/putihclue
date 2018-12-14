const express = require('express');
const router = express.Router();

const TenantController = require('../controllers/Tenant')

/* POST users . */
router.post('/tenant', TenantController.create)
/* GET users listing. */
// router.get('/users', UserController.getAll)

module.exports = router;
