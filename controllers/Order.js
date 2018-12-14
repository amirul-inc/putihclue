const Order = require('../models/Order')
const Item = require('../models/Item')

module.exports = {
    create: function (req, res, next) {
        Item.findById(req.body.item_id, function (err, item) {
            console.log('item', item);
            Order.create({
                    user: req.body.userId,
                    item: req.body.item_id,
                    status: req.body.name
                },
                function (err, result) {
                    console.log(req.body);

                    if (err)
                        next(err);
                    else
                        res.json({
                            status: "success",
                            message: "Order added successfully!!!",
                            data: result
                        });
                });
        });
    },
    getAll: function(req, res, next){
        Order.aggregate([
            {
                $lookup: {
                    from: 'items',
                    localField: 'item',
                    foreignField: '_id',
                    as: 'itemDetails'
                }
            }
        ])
        .exec(function(err, result){
            console.log('result: ', result[0].itemDetails)
            res.json(result)
            
        })
        return;
    }

}