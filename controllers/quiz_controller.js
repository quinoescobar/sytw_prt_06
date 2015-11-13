var Quiz = require('../models/quiz_model');

var quiz = new Quiz();
var current = quiz.randomQuestion();

exports.index = function(req, res, next) {
  // debug("Yendo a  index.js:  '/'");
  res.render('index', { title: 'Quiz' });
};

/* GET quizes/question page. */
exports.question = function(req,res) {
  current = quiz.randomQuestion();
  res.render('quizes/question', {pregunta: current.pregunta});
};

/* GET quizes/answer page. */
exports.answer = function(req, res) {
  var c = 'Incorrecto';
  // debug(req.query);
  // debug("current.respuesta(req.query.respuesta) = "+current.respuesta(req.query.respuesta));
  if (current.respuesta(req.query.respuesta)) { c = 'Correcto'; }
  res.render('quizes/answer', {respuesta: c});
};

exports.popNQuestion = function(req,res){
  current = quiz.popQuestion(req.params.index - 1);
  try {
    res.render('quizes/question', {pregunta: current.pregunta,respuesta: current.respuesta});
  } catch (e) {
    res.render('error', {message: "No existe esa pregunta, para el index ingresado ERRoR:  " + e});
  } finally {

  }

};
