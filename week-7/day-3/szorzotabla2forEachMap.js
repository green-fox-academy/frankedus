'use strict';

//1 for
var szorzotabla1 = '';

for (var i = 1; i <= 10; i++) {
  szorzotabla1 += i + '*' + 4 + '=' + i * 4 + '\n';
}
console.log(szorzotabla1);

//2 forEach
var szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var szorzotabla2 = '';
szamok.forEach(function(e) {
  szorzotabla2 += e + '*' + 4 + '=' + e * 4 + '\n';
})
console.log(szorzotabla2);

//3 map
var szorzotabla3 = '';
var sorok = szamok.map(function(e) {
  return e + '*' + 4 + '=' + e * 4;
})
szorzotabla3 = sorok.join('\n');
console.log(szorzotabla3);
