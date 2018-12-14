const Item = require('../models/Item')

module.exports = {
    create: function (req, res, next) {
        Item.create({
                name: req.body.name,
                description: req.body.description,
                maxmember: req.body.maxmember,
                price: req.body.price,
                images: req.file.path,
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
    getAll: function (req, res, next) {
        let itemList = [];

        Item.find({}, function (err, items) {
            if (err) {
                next(err);
            } else {
                for (let item of items) {
                    itemList.push({
                        id: item._id,
                        name: item.name,
                        description: item.description,
                        maxmember: item.maxmember,
                        price: item.price,
                        images: item.images,
                        facilities: item.facilities
                    });
                }
                res.json({
                    status: "success",
                    message: "Item list found!!!",
                    data: {
                        guests: itemList
                    }
                });

            }

        });

    }
}