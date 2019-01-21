const Room = require('../models/Room')

module.exports = {
    create: function (req, res, next) {
        Room.create({
                    name: req.body.name,
                    capacity: req.body.capacity,
                    accesstime: req.body.accesstime,
                    price: req.body.price,
                    description: req.body.description,
                    images: req.file && req.file.path,
                    status: req.body.status
                },
                function (err, result) {
                    if (err)
                        next(err)
                    else res.json({
                        status: 'success',
                        message: 'Room added!',
                        data: result
                    })
                })

    },
    getAll: function (req, res, next) {
        let roomList = [];

        Room.find({}, function (err, rooms) {
            if (err) {
                next(err);
            } else {
                for (let room of rooms) {
                    roomList.push({
                        id: room._id,
                        name: room.name,
                        capacity: room.capacity,
                        accesstime: room.accesstime,
                        price: room.price,
                        description: room.description,
                        status: room.status,
                        images: room.images
                    });
                }
                res.json(roomList);
                

            }

        });

    },
    getById: function (req, res, next) {
        Room.findById(req.params.roomId, (err, RoomInfo) => {
            if (err)
                next(err)
            else {
                res.json(RoomInfo)
            }
        })
    },
    updateById: function (req, res, next) {
        Room.findByIdAndUpdate(req.params.roomId, {
            name: req.body.name,
            capacity: req.body.capacity,
            accesstime: req.body.accesstime,
            price: req.body.price,
            description: req.body.description,
            status: req.body.status,
            images: req.file && req.file.path
        }, function (err, RoomInfo) {
            if (err)
                next(err)
            else {
                res.json(RoomInfo)
            }
        })
    },
    deleteByid: function (req, res, next) {
        Room.findByIdAndRemove(req.params.roomId, function (err, RoomInfo) {
            if (err)
                next(err)
            else {
                res.json(RoomInfo
                )
            }
        })
    }
}