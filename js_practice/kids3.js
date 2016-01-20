'use strict';

var kids = [
 {name: 'Julika', age: 8, sex: 'female'},
 {name: 'Tiborka', age: 7, sex: 'male'},
 {name: 'Zsolti', age: 6, sex: 'male'},
 {name: 'Gerda', age: 9, sex: 'female'},
 {name: 'Zsomborka', age: 8, sex: 'male'}
];

function getAges (kids) {
  var ages = [];
  for (var i = 0; i < kids.length; i++) {
    ages.push(kids[i].age)
  }
  return ages;
}

function getAges2 (kids) {
  var ages = [];
  kids.forEach(function(kid) {
    ages.push(kid.age)
  });
  return ages
}

function getAges3(kids) {
  return kids.map(function(kid) {
    return kid.age;
  });
}

console.log(getAges(kids));
console.log(getAges2(kids));
console.log(getAges3(kids));
