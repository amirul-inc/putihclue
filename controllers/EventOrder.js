const Order = require('../models/EventOrder')
const Event = require('../models/Event')

module.exports = {
    create: function (req, res, next) {
        Event.findById(req.body.event_id, function (err, event) {
            console.log('event', event);
            Order.create({
                    fullname: req.body.fullname,
                    event: req.body.event_id,
                    email: req.body.email,
                    phone: req.body.phone,
                    status: req.body.status
                },
                function (err, result) {
                    console.log(req.body);

                    if (err)
                        next(err);
                    else
                        res.json(result);
                });
        });
    },
    getAll: function(req, res, next){
        Order.aggregate([
            {
                $lookup: {
                    from: 'events',
                    localField: 'event',
                    foreignField: '_id',
                    as: 'eventDetails'
                }
            }

        ])
        .exec(function(err, result){
            console.log('result: ', result.eventDetails)
            res.json(result)
            
        })
        return;
    }

}