'use strict';

function Car(color, type, km) {
  this.color = color;
  this.type = type;
  this.km = km;

  this.ride = function(km) {
    this.km += km;
  }
}

var uaz = new Car('libafos', 'uaz', 300000);
uaz.ride(60);
console.log(uaz.km);

// igy tudni kell oroklest irni
function Car2(color, type, km) {
  this.color = color;
  this.type = type;
  this.km = km;
}

Car2.prototype.ride = function(km) {
  this.km += km;
}

var trabi = new Car2('zold', 'Trabant', 400);

trabi.ride(0.02);
console.log(trabi.km);
