const Tenant = require('../models/Tenant')

module.exports = {
    create: function (req, res, next) {
        Tenant.create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            description: req.body.description,
            image: req.file.path
        },
    function (err, result){
        if(err)
        next(err)
        else res.json({
            status: 'success',
            message: 'Tenant added!',
            data: result
        })
    })
    }
}