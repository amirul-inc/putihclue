const Tenant = require('../models/Tenant')
const User = require('../models/User')

module.exports = {
    create: function (req, res, next) {
        User.findById(req.body.userId, function (err, member) {
            console.log('member :', member)

            Tenant.create({
                    name: req.body.name,
                    phone: req.body.phone,
                    email: req.body.email,
                    description: req.body.description,
                    status: req.body.status,
                    images: req.file && req.file.path,
                    member: req.body.userId
                },
                function (err, result) {
                    if (err)
                        next(err)
                    else res.json(
                        result)
                })

        })
    },
    getAll: function (req, res, next) {
        Tenant.aggregate([{
                $graphLookup: {
                    from: 'users',
                    startWith: '$member',
                    connectFromField: 'member',
                    connectToField: '_id',
                    as: 'userDetail'
                }

            }])
            .exec(function (err, result) {
                console.log('result: ', result);
                res.json(result)
            })
        return;

    },
    getById: function (req, res, next) {
        Tenant.findById(req.params.tenantId, (err, TenantInfo) => {
            if (err)
                next(err)
            else {
                res.json({
                    status: 'Success',
                    message: 'Tenant found!',
                    data: {
                        tenants: TenantInfo
                    }
                })
            }
        })
    },
    updateById: function (req, res, next) {
        Tenant.findByIdAndUpdate(req.params.tenantId, {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            description: req.body.description,
            status: req.body.status,
            images: req.file.path
        }, function (err, TenantInfo) {
            if (err)
                next(err)
            else {
                res.json({
                    status: 'success',
                    message: 'Tenant Update Successfully...',
                    data: TenantInfo
                })
            }
        })
    },
    deleteByid: function (req, res, next) {
        Tenant.findByIdAndRemove(req.params.tenantId, function (err, TenantInfo) {
            if (err)
                next(err)
            else {
                res.json({
                    status: 'success',
                    message: 'Tenant Deleted Successfully...',
                    data: TenantInfo
                })
            }
        })
    }
}