'use strict';

var kids = [
  {name: 'Tibbor', candies: 2},
  {name: 'Steve', candies: 3},
  {name: 'Agoston', candies: 0},
  {name: 'Julika', candies: 7},
  {name: 'Krisztian', candies: 4},
];

//1
function getRichestKidsName(kids) {
  var maxName = '';
  var maxCandie = kids[0].candies;
  for (var i = 0; i < kids.length; i++) {
    if (maxCandie < kids[i].candies) {
      maxCandie = kids[i].candies;
      maxName = kids[i].name;
    }
  } return maxName;
}

console.log(getRichestKidsName(kids));

//2
function getRichestKidsName2(kids) {
  var richestKid = kids[0];
  kids.forEach(function(currentKid) {
    if (currentKid.candies > richestKid.candies)
      richestKid = currentKid;
    }
  });

  return richestKid.name;
