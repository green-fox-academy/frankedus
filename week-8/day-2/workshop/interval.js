'use strict';

var count = 0;

var interval = setInterval(function() {
  count++;
  console.log('JEEE!', count);
}, 500);

setTimeout(function() {
  console.log('BOOOM');
  clearInterval(interval);
}, 5000);

setTimeout(function() {
  for (var i = 0; i < 12341234213; i++) {

  }
}, 2000);
