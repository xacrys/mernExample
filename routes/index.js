var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Smartopia INC ' });
  res.send("<h1>Sin Vistas</h1>")
});

module.exports = router;
