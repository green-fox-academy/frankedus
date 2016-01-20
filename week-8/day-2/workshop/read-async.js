'use strict';

var fs = require('fs');

fs.readFile('alma.txt', function(err, content) {
  console.log(String(content));
});

console.log('END');
