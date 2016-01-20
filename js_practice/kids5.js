'use strict';

var kids = [
 {name: 'Julika', age: 8, sex: 'female'},
 {name: 'Tiborka', age: 7, sex: 'male'},
 {name: 'Zsolti', age: 6, sex: 'male'},
 {name: 'Gerda', age: 9, sex: 'female'},
 {name: 'Zsomborka', age: 8, sex: 'male'}
];

function filterNamesBySex(kids, sex) {
  var kidsFilteredBySex = [];
  for (var i = 0; i < kids.length; i++) {
    if (kids[i].sex === sex) {
      kidsFilteredBySex.push(kids[i].name)
    }
  }
  return kidsFilteredBySex;
}


function filterNamesBySex2(kids, sex) {
  var kidsFilteredBySex = [];
  kids.forEach(function(kid) {
    if (kid.sex === sex)
    kidsFilteredBySex.push(kid.name)
  })
  return kidsFilteredBySex
}

console.log(filterNamesBySex(kids, 'female'));
console.log(filterNamesBySex2(kids, 'male'));
