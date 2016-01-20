'use strict';

var fs = require('fs');

var out = '';

fs.readFile('alma.txt', function(err, almaContent) {
  fs.readFile('korte.txt', function(err, korteContent) {
    console.log(almaContent + korteContent);
  });
});
