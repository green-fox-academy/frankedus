'use strict';

var i = 0;
for ( ;i < 5 ; ) {
  console.log(i);
  i++
}

for (var i = 1; i < 11; i += 2) {
  console.log(i);
}

var dogs = ['Virsli', 'Morzsi', 'Tappancs'];

for (var i = 0; i < dogs.length; i++) {
  console.log(dogs[i]);
}

var student = {
  kor: 6,
  nev: 'tibi',
  labmeret: 45
};

for (var key in student) {
  console.log(key);
  console.log(student[key]);
}
