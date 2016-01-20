'use strict';

var express = require('express');
var url = require('url');
var bodyParser = require('body-parser');

var items = [
  {item: 'Buy milk'},
  {item: 'Save the world'},
  {item: 'Practice polefitness'}
];

var app = express();
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.json(items);
});

app.listen(3000);
