const Event = require('../models/Event')

module.exports = {
    create: function (req, res, next) {
        Event.create({
            name: req.body.name,
            description: req.body.description,
            date: req.body.date,
            time: req.body.time,
            status: req.body.status,
            price: req.body.price,
            images: req.file && req.file.path
        },
    function (err, result){
        if(err)
        next(err)
        else res.json(
            result
        )
    })
    },
    getAll: function (req, res, next){
        let Events = []
        Event.find({}, function (err, events){
            if(err)
            next(err)
            else{
                for(let event of events){
                    Events.push({
                        id: event._id,
                        name: event.name,
                        description: event.description,
                        date: event.date,
                        time: event.time,
                        status: event.status,
                        price: event.price,
                        images: event.images
                    })
                }
                res.json(
                    Events
                )
            }
        })
    },
    deleteByid: function (req, res, next) {
        Event.findByIdAndRemove(req.params.eventId, function (err, EvenInfo) {
            if (err)
                next(err)
            else {
                res.json(EvenInfo
                )
            }
        })
    }
}