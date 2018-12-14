const Tenant = require('../models/Tenant')

module.exports = {
    create: function (req, res, next) {
        Tenant.create({
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                description: req.body.description,
                status: req.body.status,
                images: req.file.path
            },
            function (err, result) {
                if (err)
                    next(err)
                else res.json({
                    status: 'success',
                    message: 'Tenant added!',
                    data: result
                })
            })
    },
    getAll: function (req, res, next) {
        let DataTenant = []
        Tenant.find({}, function (err, tenants) {
            if (err)
                next(err)
            else {
                for (let tenant of tenants) {
                    DataTenant.push({
                        id: tenant._id,
                        name: tenant.name,
                        phone: tenant.phone,
                        email: tenant.email,
                        description: tenant.description,
                        status: tenant.status,
                        images: tenant.images
                    })
                }
                res.json({
                    status: 'success',
                    message: 'tenant list found!',
                    data: {
                        tenant: DataTenant
                    }
                })
            }
        })
    }
}