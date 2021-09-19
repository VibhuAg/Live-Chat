var express = require('express');
var models = require('../models');
var router = express.Router();

// GET
router.get('/page2/', function(req, res, next) {
  models.Questions.findAll().then(function(questions) {
    var result = questions.map(function(question) {
      return models.questionToJSON(question);
    });
    res.json(result);
  }).catch(next);
});

// POST
router.post('/page2/', function(req, res, next) {
  var q = {text: req.body.text, number: req.body.number, answers:[]};
  models.Questions.create(q).then(function(question) {
    res.json(models.questionToJSON(question));
  }).catch(next);
});

module.exports = router;