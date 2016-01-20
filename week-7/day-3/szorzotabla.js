'use strict';

function szorzotabla(number) {
  var output = '';
  for (var i = 1; i <= 10; i++) {
    output += i + ' * ' + number + ' = ' + i * number + '\n';
  }
  return output;
}

for (var i = 1; i <=10; i++) {
  console.log(szorzotabla(i));
}
