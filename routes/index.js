var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var config = require('./config.json');

/* GET home page. */
router.post('/', function(req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.email,
            pass: config.password
        }
    });

    var mailOptions = {
        from: config.email,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.body
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.send("--- Email Sent ---");
    res.end();

});

module.exports = router;