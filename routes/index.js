var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var to = req.body.to;
    var subject = req.body.subject;
    var body = req.body.body;

    console.log(to);
    console.log(subject);
    console.log(body);

    res.send("Done");
    res.end();
});

module.exports = router;
