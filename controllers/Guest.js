const Guest = require('../models/Guest')

module.exports = {
    create: function (req, res, next) {
        Guest.create({
            company: req.body.company,
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.phone,
            necessary: req.body.necessary,
            meet: req.body.meet
        },
    function (err, result){
        if(err)
        next(err)
        else res.json({
            status: 'success',
            message: 'welcome to Ruang Kreasi',
            data: result
        })
    })
    },
    getAll: function (req, res, next){
        let Guests = []
        Guest.find({}, function (err, guests){
            if(err)
            next(err)
            else{
                for(let guest of guests){
                    Guests.push({
                        id: guest._id,
                        company: guest.company,
                        fullname: guest.fullname,
                        email: guest.email,
                        phone: guest.phone,
                        necessary: guest.necessary,
                        meet: guest.meet
                    })
                }
                res.json(
                    Guests
                )
            }
        })
    },
    updateById: function (req, res, next) {
        Guest.findByIdAndUpdate(req.params.guestId, {
            company: req.body.company,
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.phone,
            necessary: req.body.necessary,
            meet: req.body.meet,
        }, function (err, GuestInfo) {
            if (err)
                next(err)
            else {
                res.json(GuestInfo)
            }
        })
    },
    deleteByid: function (req, res, next) {
        Guest.findByIdAndRemove(req.params.guestId, function (err, GuestInfo) {
            if (err)
                next(err)
            else {
                res.json(GuestInfo
                )
            }
        })
    }
}