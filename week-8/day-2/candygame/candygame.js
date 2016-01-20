'use strict';

var candyButton = document.querySelector('.create-candies');
var candyNumber = document.querySelector('.candy-number');
var lollipopButton = document.querySelector('.buy-lollipop');
var lollipopNumber = document.querySelector('.lolli-number');
var candyRaise = document.querySelector('.candies-raise-with');


var candies = 0;
var lollipop = 0;
var raise = 0;


candyButton.addEventListener ('click', function() {
  candies++;
  candyNumber.innerText = candies;
});

lollipopButton.addEventListener ('click', function() {
  if (candies >= 10) {
    lollipop++;
    lollipopNumber.innerText = lollipop;
    candies = candies - 10;
    candyNumber.innerText = candies;
  }
});

setInterval(function() {
  var kacsa = false;
  var devided = lollipop / 10;
  if (lollipop >= 10) {
    candies = candies + Math.floor(devided);
    candyNumber.innerText = candies;
    candyRaise.innerText = Math.floor(devided);
  }
  if (candies >= 5000) {
    var kacsa = true
  }
  if ( kacsa === true) {
    alert('You win!')
    candies = 0;
    candyNumber.innerText = 0;
    lollipop = 0;
    lollipopNumber.innerText = 0;
    candyRaise.innerText = 0;
  }
  }, 1000);
