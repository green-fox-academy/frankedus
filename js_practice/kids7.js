'use strict';

var kids = [
 {name: 'Julika', age: 8, sex: 'female'},
 {name: 'Tiborka', age: 7, sex: 'male'},
 {name: 'Zsolti', age: 6, sex: 'male'},
 {name: 'Gerda', age: 9, sex: 'female'},
 {name: 'Zsomborka', age: 8, sex: 'male'}
];

function groupBySex(kids) {
  var output = {female: [], male: []}
  for (var i = 0; i < kids.length; i++) {
    if (kids[i].sex === 'female') {
      output.female.push(kids[i])
    } else {
      output.male.push(kids[i])
    }
  }
  return output
}

function groupBySex2(kids) {
  var output = {female: [], male: []};
  kids.forEach(function(kid) {
    if (kid.sex === 'female') {
      output.female.push(kid)
    } else {
      output.male.push(kid)
    }
  })
  return output
}

function groupBySex3(kids) {
  var output = {female: [], male: []};
  kids.forEach(function(kid) {
    output[kid.sex].push(kid)
  })
  return output
}

function groupBySex4(kids) {
  var output = {};
  kids.forEach(function(kid) {
    if (output[kid.sex] === undefined) {
      output[kid.sex] = [];
    }
    output[kid.sex].push(kid)
  });
  return output
}

console.log(groupBySex(kids));
console.log(groupBySex2(kids));
console.log(groupBySex3(kids));
console.log(groupBySex4(kids));
