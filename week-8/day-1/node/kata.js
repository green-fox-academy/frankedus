'use strict';

var pairs = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function arabic2roman(arabic) {
  var romannumber = '';
  while (arabic > 0) {
    for (var i = 0; i < pairs.length; i++) {
      if (arabic >= pairs[i][0]) {
        romannumber += pairs[i][1];
        arabic -= pairs[i][0];
      }
    }

  }
  return romannumber;
}

module.exports = arabic2roman;
