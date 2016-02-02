//create a function that returns a new array that contains
//the doubles of the originial arrays elements
 var array = [6, 7, 4, 2, 3];

function doubleArray(array) {
  newArray = [];
  array.forEach(function(number) {
    number *= 2;
    newArray.push(number);
  });
  return newArray;
}

console.log(doubleArray(array));



//create a function that returns the smallest number from a list
 function smallestNumber(array) {
   var smallestNumber = array[0];
   array.forEach(function(number) {
     if(number < smallestNumber) {
       smallestNumber = number;
     }
   });
   return smallestNumber;
 }

 console.log(smallestNumber(array));



//create a function that determines if a letter is in a string

function search(string, letter) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      return true;
    }
  }
  return false;
}

console.log(search("hagyma", "a"));  //true
console.log(search("korte", "a")); //false
console.log(search("cba", "a")); //true
