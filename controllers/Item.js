const Item = require('../models/Item')

module.exports = {
    create: function (req, res, next) {
            Item.create({
                    name: req.body.name,
                    description: req.body.description,
                    capacity: req.body.capacity,
                    accesstime: req.body.accesstime,
                    images: req.file && req.file.path,
                    price: req.body.price,
                    status: req.body.status
                },
                function (err, result) {
                    if (err)
                        next(err)
                    else res.json({
                        status: 'success',
                        message: 'Item added!',
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
                        title: item.title,
                        description: item.description,
                        capacity: item.capacity,
                        accesstime: item.accesstime,
                        price: item.price,
                        images: item.images
                    });
                }
                res.json(itemList);
                

            }

        });

    },
    updateById: function (req, res, next) {
        Item.findByIdAndUpdate(req.params.itemId, {
            name: req.body.name,
            description: req.body.description,
            capacity: req.body.capacity,
            accesstime: req.body.accesstime,
            images: req.file.path,
            price: req.body.price,
            status: req.body.status
        }, function (err, ItemInfo) {
            if (err)
                next(err)
            else {
                res.json(ItemInfo)
            }
        })
    },
}