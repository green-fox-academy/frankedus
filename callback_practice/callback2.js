'use strict';

var fs = require('fs');

fs.readFile('./alma.txt', function (err, res) {
    console.log(res + 'tree');
})
