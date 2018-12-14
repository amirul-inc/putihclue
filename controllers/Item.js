const Item = require('../models/Item')

module.exports = {
    create: function (req, res, next) {
        Item.create({
                name: req.body.name,
                description: req.body.description,
                maxmember: req.body.maxmember,
                price: req.body.price,
                images: req.body.images,
                facilities: [{
                    meetingroom: req.body.meetingroom,
                    silentroom: req.body.silentroom,
                    paperprint: req.body.paperprint,
                    silentroom: req.body.silentroom,
                    freeflow: req.body.freeflow,
                    premiumflow: req.body.premiumflow,
                    mailphoneservice: req.body.mailphoneservice,
                    locker: req.body.locker,
                    passport: req.body.passport,
                    guestpass: req.body.guestpass
                }]
            },
            function (err, result) {
                if (err)
                    next(err)
                else res.json({
                    status: 'success',
                    message: 'Create Item Successfuly!',
                    data: result
                })
            })
    },
}