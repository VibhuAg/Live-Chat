var express = require("express"); 
var app = express();
var bodyParser = require("body-parser");
var path = require("path")
var uuid = require('uuid-random');

const { uniqueNamesGenerator, adjectives, colors, animals, names } = require('unique-names-generator');

// Running our server on port 3080
var PORT  = process.env.PORT || 3080

var server = app.listen(PORT, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', 'localhost:', port);
});

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});