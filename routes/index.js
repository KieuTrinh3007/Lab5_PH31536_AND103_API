var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/distributor-management', function (req, res, next) {
  res.render('distributor-management', { title: 'distributor management' });
});

router.get('/fruit-management', function (req, res, next) {
  res.render('fruit-management', { title: 'fruit management' });
});
module.exports = router;
