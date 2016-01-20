'use strict';

var kids = [
 {name: 'Julika', age: 8, sex: 'female'},
 {name: 'Tiborka', age: 7, sex: 'male'},
 {name: 'Zsolti', age: 6, sex: 'male'},
 {name: 'Gerda', age: 9, sex: 'female'},
 {name: 'Zsomborka', age: 8, sex: 'male'}
];

function getAgeByName(kids, name) {
  var age = 0;
  for (var i = 0; i < kids.length; i++) {
    if (kids[i].name === name) {
      age = kids[i].age;
    }
  }
  return age;
}

function getAgeByName2 (kids, name) {
  var age = 0;
  kids.forEach(function(kid) {
    if (kid.name) === name) {
      age = kid.age
    }
  })
}
console.log(getAgeByName(kids, 'Gerda'));
