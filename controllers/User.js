const User = require('../models/User')
const Bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    create : function(req, res, next){
        User.create({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            phone : req.body.phone,
            admin : req.body.admin
        },
    function(err, result){
        if(err)
        next(err)
        else res.json({status: 'success', message: 'create user successfuly!', data: result})
    })
    },
    getAll : function(req, res, next){

    },
    authenticate : function(req, res, next){

    }
}