const Order = require('../models/RoomOrder')
const Room = require('../models/Room')

module.exports = {
    create: function (req, res, next) {
        Room.findById(req.body.room_id, function (err, room) {
            console.log('room', room);
            Order.create({
                    fullname: req.body.fullname,
                    company: req.body.company,
                    room: req.body.room_id,
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
                    from: 'rooms',
                    localField: 'room',
                    foreignField: '_id',
                    as: 'roomDetails'
                }
            }

        ])
        .exec(function(err, result){
            console.log('result: ', result.roomDetails)
            res.json(result)
            
        })
        return;
    }

}