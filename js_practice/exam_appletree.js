'use strict';

// Create a function that counts all the letters in a string,
// and returns an object that has the letters as keys and the counts as values.
var string = 'appletree';

function countLetters(string) {
  var output = {'letter': 'number'};
  for (var i = 0; i < string.length; i++) {
    output.push(string[i]);
  }
  return output;
}

console.log(countLetters('appletree'));

// console.log(string.split(''))

// function countLetters(string) {
//
// }
//
// console.log(countLetters(string));
//

// console.log(countLetters('appletree')); // {a: 1, p: 2, l: 1, e: 3, t: 1, r: 1}
