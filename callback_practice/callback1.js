'use strict';

var fs = require('fs');

fs.readFile('./korte.txt', function(err, res) {
  console.log(String(res));
  console.log(String(err));
});
