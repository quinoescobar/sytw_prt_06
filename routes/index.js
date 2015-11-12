var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});
/* GET quiz/question page. */
router.get('/quiz/question', function(req, res, next) {
  res.render('quiz/question', { title: 'Quiz' });
});
/* GET quiz/answer page. */
router.get('/quiz/answer', function(req, res, next) {
  res.render('quiz/answer', { title: 'Quiz' });
});

module.exports = router;
