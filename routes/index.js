var express = require('express');
var router = express.Router();

var quizController = require("../controllers/quiz_controller.js");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Estamos en Heroku' });
});

router.get('/author',quizController.author);

module.exports = router;
