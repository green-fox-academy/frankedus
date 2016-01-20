'use strict';

function greet(name) {
  console.log('Hi ' + name + '!');
}

greet('Tojas');

greet('Tojas', 4, [], {kacsa: 'pulcsiban'})

greet();


function double(num) {
  return 2 * num;
}

console.log(double(4));
