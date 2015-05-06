var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout/index', { jsFile: 'home' });
});

router.get('/blog', function(req, res, next) {
	res.render('blog', {jsFile: 'home'});
})

module.exports = router;
