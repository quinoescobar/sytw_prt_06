var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', quizController.index);
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

router.get('/quizes/question/:index', quizController.popNQuestion);

module.exports = router;
