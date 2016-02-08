'use strict';

var test = require('tape');
var parseArguments = require('./argparser.js');

test(function(t){
  t.deepEqual(parseArguments(''), {});
  t.end();
});

test(function(t){
  t.deepEqual(parseArguments('ls -l'), {l : true});
  t.deepEqual(parseArguments('ls -a'), {a : true});
  t.deepEqual(parseArguments('ls -a -c'), {a : true, c: true});
  t.deepEqual(parseArguments('ls -a -c -k macska -n 100'), {a:true, c:true, k: 'macska', n: 100});
  t.deepEqual(parseArguments('ls -n 0'), {n: 0});
  t.end();
});
