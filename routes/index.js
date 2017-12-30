var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var config = require('./config.json');
var validator = require("email-validator");

/* GET home page. */
router.post('/', function(req, res, next) {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: config.email,
            pass: config.password
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });

    if (validator.validate(req.body.to)){
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
    }else{
        res.send("--- Invalid Email in Body ---");
        res.end();
    }



});

module.exports = router;