const User = require('../models/User')
const Bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    create: function (req, res, next) {
        User.create({
                username: req.body.username,
                fullname: req.body.fullname,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                admin: req.body.admin
            },

            function (err, result) {
                if (err)
                    next(err)
                else res.json({
                    status: 'success',
                    message: 'create user successfuly!',
                    data: result
                })
            })
    },
    getAll: function (req, res, next) {
        let Users = []
        User.find({}, function (err, users) {
            if (err) {
                next(err)
            } else {
                for (let user of users) {
                    Users.push({
                        id: user._id,
                        username: user.username,
                        fullname: user.fullname,
                        email: user.email,
                        password: user.password,
                        phone: user.phone,
                        meet: user.meet,

                    })
                }
                res.json(Users
                )
            }
        })
    },
    authenticated: function (req, res, next) {
        User.findOne({
            email: req.body.email
        }, function (err, UserInfo) {
            if (err) {
                next(err)
            } else {
                if (UserInfo != null && Bcrypt.compareSync(req.body.password, UserInfo.password)) {
                    const token = jwt.sign({
                        id: UserInfo._id
                    }, req.app.get('secretKey'), {
                        expiresIn: '2 days'
                    })
                    res.json({
                            token
                    })
                } else {
                    res.json({
                        status: 'error',
                        message: 'invalid username or password!'
                    })
                }
            }
        })
    }
}