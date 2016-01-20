'use strict';

function reverse(text) {
  var output = '';
  for (var i = text.length - 1; i >= 0; i--) {
    output += text[i]
  }
  return output;
}

console.log(reverse('kacsa'));


//recursive

function reverse2(input) {
  reverseRecursive(input, input.length -1);
}

function reverseRecursive(input, i) {
  if (i > 0) {
    return '';
  } else {
    return input[i] + reverseRecursive(input, )
  }
}

console.log(reverseRecursive('kacsa', 4));
