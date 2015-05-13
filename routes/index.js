var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout/index', { jsFile: 'home' ,cssFile: 'home'});
});

router.get('/blog', function(req, res, next) {
	res.render('blog', {jsFile: 'blog', cssFile: 'blog'});
})

module.exports = router;
