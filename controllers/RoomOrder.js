const Order = require('../models/RoomOrder')
const Room = require('../models/Room')
const nodemailer = require('nodemailer');

module.exports = {
    create: function (req, res, next) {
        Room.findById(req.body.room_id, function (err, room) {
            const {fullname, room_id, email, company, phone, status } = req.body
            Order.create({
                    fullname: fullname,
                    company: company,
                    room: room_id,
                    email: email,
                    phone: phone,
                    status: status
                },
                function (err, result) {
                    if (err){
                        next(err);
                    }else {
                      const content = `name: ${fullname} \n
                        email: ${email} \n 
                        company: ${company} \n 
                        phone: ${phone} \n 
                        message: Terimakasih sudah Booking Room di Ruang Kreasi, Pesanan anda sedang di proses. Tunggu Info Selanjut nya Terimakasih `
                    
                        const mail = {
                            from: fullname,
                            to: email, 
                            subject: 'New Message from Ruang Kreasi',
                            text: content
                        }

                        const transport = {
                            host: 'smtp.gmail.com',
                            port: 465,
                            secure: true,
                            auth: {
                              user: process.env.EMAIL_SENDER_USER,
                              pass: process.env.EMAIL_SENDER_PASSWORD
                            }
                          }

                        const transporter = nodemailer.createTransport(transport)
                          
                          transporter.verify((error, success) => {
                            if (error) {
                              console.log(error);
                            } else {
                              console.log('Server is ready to take messages');
                            }
                          });

                          transporter.sendMail(mail, (err, data) => {
                            if (err) {
                                res.json({...result._doc,
                                    msg: 'fail'
                                })
                            } else {
                                res.json({...result._doc,
                                    msg: 'success'
                                })
                            }
                        })
                    }
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