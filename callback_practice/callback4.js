'use stict';

var fs = require('fs');

fs.readFile('./barack.txt', function(err, res) {
  if (String(res)[0] === 'k') {
    fs.readFile('./alma.txt', function(err, res) {
      console.log(String(res));
    });
  } else {
    fs.readFile('./korte.txt', function(err, res) {
      console.log(String(res));
    });
  }
});
