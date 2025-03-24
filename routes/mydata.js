var express = require('express');
var router = express.Router();

/* getting mydata. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Dakotah Haughey' });
});

module.exports = router;
