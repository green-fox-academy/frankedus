'use strict'
//1
var numbers = [7, 8, -1, 4, 3, 12]

var minNumber = numbers[0];

for (var i = 1; i <= numbers.length; i++) {
  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}

console.log(minNumber);


//2

var numbers = [7, 8, -1, 4, 3, 12]

var minNumber = numbers[0];

for (var i = 1; i <= numbers.length; i++) {
  minNumber = (numbers[i] < minNumber) ? numbers[i] : minNumber;
}

console.log(minNumber);
