
//make a method that takes a number and return true, if the number is a palindrome
// feel free to use, the previous written python algorithm
// hint1: you can compare numbers as strings, by number convert to string => String(3)='3'


function isPalindrome(number) {
  var palindrome = '';
  for (var i = (String(number).length) - 1; i >=0; i--) {
    palindrome += String(number)[i];
  }
  if (palindrome === String(number)) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome(12233721));

//console.log(isPalindrome(121)) => true
//console.log(isPalindrome(23)) => false



//Good Luck! :)
