'use strict';

var myArray = [1, 2, 3, 4, 5];

function printElem(e) {
  console.log(e);
}

myArray.forEach(printElem);

myArray.forEach(function(e) {
  console.log(e * 10);
})


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(e) {
  console.log(e + '*' + 4 + '=' + e * 4);
});
