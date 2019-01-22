var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config.js');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/event/order', (req, res, next) => {
//   var fullname = req.body.name
//   var email = req.body.email
//   var phone = req.body.phone
//   var content = `name: ${fullname} \n email: ${email} \n phone: ${phone} \n message: Terimakasih sudah melakukan pemesanan event di Ruang Kreasi, Pesanan anda sedang di proses. Tunggu Info Selanjut nya Terimakasih `

//   var mail = {
//     from: fullname,
//     to: email,  //Change to email address that you want to receive messages on
//     subject: 'New Message from Ruang Kreasi',
//     text: content
//   }

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         msg: 'fail'
//       })
//     } else {
//       res.json({
//         msg: 'success'
//       })
//     }
//   })
// })

// router.post('/room/order', (req, res, next) => {
//   var fullname = req.body.name
//   var email = req.body.email
//   var company = req.body.company
//   var phone = req.body.phone
//   var content = `name: ${fullname} \n email: ${email} \n company: ${company} \n phone: ${phone} \n message: Terimakasih sudah Booking Room di Ruang Kreasi, Pesanan anda sedang di proses. Tunggu Info Selanjut nya Terimakasih `

//   var mail = {
//     from: fullname,
//     to: email,  //Change to email address that you want to receive messages on
//     subject: 'New Message from Ruang Kreasi',
//     text: content
//   }

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         msg: 'fail'
//       })
//     } else {
//       res.json({
//         msg: 'success'
//       })
//     }
//   })
// })
module.exports = router;


