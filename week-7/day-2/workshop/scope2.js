"use strict";

var i = 0
function textMultiply(text, num) {
  var output = ""
  for (var i = 0; i < num; i++) {
    output += text;
  }
  return output;
}
console.log(textMultiply("alma", 3));
