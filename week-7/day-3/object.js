'use strict';

//1
var humwee = {
  type: 'Rendes Katonai Hummer',
  color: 'Terep',
  km: 20000
};


function oldride(car, km) {
  car.km += km;
}

oldride(humwee, 200)

console.log(humwee.km);


//2
var humwee = {
  type: 'Rendes Katonai Hummer',
  color: 'Terep',
  km: 20000
  ride: function(km) {
    this.km += km;
  }
};

humwee2.ride(200);

console.log(humwee2.km);
console.log(humwee.km);
