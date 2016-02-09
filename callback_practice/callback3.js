'use strict';

var fs = require('fs');

fs.readFile('./alma.txt', function (err, res) {
  console.log(String(res));
  fs.readFile('./korte.txt', function (err, res) {
    console.log(String(res));
  });
});
