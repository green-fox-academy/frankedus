'use strict';

var kids = [
 {name: 'Julika', age: 8, sex: 'female'},
 {name: 'Tiborka', age: 7, sex: 'male'},
 {name: 'Zsolti', age: 6, sex: 'male'},
 {name: 'Gerda', age: 9, sex: 'female'},
 {name: 'Zsomborka', age: 8, sex: 'male'}
];

function getTheLongestNamesAge (kids) {
  var longestNameKid = kids[0];
  for (var i = 1; i < kids.length; i++) {
    if (kids[i].name.length > longestNameKid.name.length) {
       longestNameKid = kids[i];
    }
  }
  return longestNameKid.age;
}

console.log(getTheLongestNamesAge(kids));
