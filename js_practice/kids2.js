'use strict';

var kids = [
 {name: 'Julika', age: 8, sex: 'female'},
 {name: 'Tiborka', age: 7, sex: 'male'},
 {name: 'Zsolti', age: 6, sex: 'male'},
 {name: 'Gerda', age: 9, sex: 'female'},
 {name: 'Zsomborka', age: 8, sex: 'male'}
];

function countbyAge (kids, age) {
  var count = 0;
  for (var i = 0; i < kids.length; i++) {
    if (kids[i].age === age) {
      count++;
    }
  }
  return count;
}

function countbyAge2(kids, age) {
  var count = 0;
  kids.forEach(function(kid) {
    if (kid.age === age) {
      count++;
    }
  });
  return count;
}

console.log(countbyAge(kids, 8));
console.log(countbyAge2(kids, 8));
