'use strict';

function prim(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return 'not prime';
    }
  }
  return 'prime';
}

console.log(prim(17));
console.log(prim(15));

var numbers = [4,2,7,12,8,17];
var prime = [];
var notPrime = [];
numbers.forEach(function(number) {
  if (prim(number) === 'prime') {
    prime.push(number);
  } else {
    notPrime.push(number);
  }
});

console.log(prime);
console.log(notPrime);

function a(first, last) {
  for (var i = first; i <= last; i++) {
    if (prim(i) === 'prime') {
      if (isPalindrome(i) && i > 9) {
        console.log('Zeno');
      }else {
        console.log(i);
      }
    }
  }
}


function isPalindrome(number) {
  var palindrome = '';
  var stringNum = String(number);
  for (var i = stringNum.length - 1; i >= 0; i--) {
    palindrome += stringNum[i];
  }
  if (palindrome === stringNum) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome(11));
a(1, 100);
