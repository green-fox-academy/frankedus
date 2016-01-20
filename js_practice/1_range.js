'use strict';

function range(to) {
  var output = [];
  for (var i = 0; i < to; i++) {
    output.push(i);
  }
  return output;
}

var array = range(5);
console.log(array);
