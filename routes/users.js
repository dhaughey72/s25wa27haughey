var express = require('express');
var router = express.Router();

var ratio = 0.75;
var acc = 1000;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('value is: ' + acc);
});

module.exports = router;
