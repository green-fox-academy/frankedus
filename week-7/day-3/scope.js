'use strict';
var glob = 7;
var c = 8;

function printLocal() {
  var a = 123;
  var c = 9;
  console.log(a);
  console.log(glob);
  console.log('local', c);
}

printLocal();
console.log('kint', c);
// console.log(a); ERROR
