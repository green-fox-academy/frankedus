'use strict';

console.log('mukodik');

var cim = document.querySelector('h1')
console.log(cim);

// cim.style.backgroundColor = 'pink';
cim.classList.add('piros');

//var majomKep = document.querySelector('img');
//majomKep.setAttribute('src','https://49.media.tumblr.com/cd0560acd89d//4983d0ea4cb54cf2fdfe/tumblr_nn1tq1PVcA1upwzm1o1_400.gif');


function kepcsinalo(src) {

  var ujkep = document.createElement('img');

  ujkep.setAttribute('src', src);

  var bodyvaltozoban = document.querySelector('body');

  bodyvaltozoban.appendChild(ujkep);

}

for (var i = 0; i < 10; i++) {
};
kepcsinalo('https://files.slack.com/files-pri/T0E3ZD06M-F0HQLS8TC/slack_for_ios_upload.jpg')


var kepek = ['https://files.slack.com/files-pri/T0E3ZD06M-F0HRGRL0H/json.jpg', 'https://files.slack.com/files-pri/T0E3ZD06M-F0GLHAF5Z/1.jpg', 'https://files.slack.com/files-pri/T0E3ZD06M-F0GK6KB4N/slack_for_ios_upload.jpg', 'http://blogs.msdn.com/blogfiles/wesdyer/WindowsLiveWriter/LinqtoASCIIArt_12D96/image%7B0%7D%5B3%5D.png','https://files.slack.com/files-pri/T0E3ZD06M-F0EGVSLUX/masnap.png']

kepek.forEach(function(kepsrc) {
  kepcsinalo(kepsrc)
})

var gomb = document.querySelector('.csinal');

gomb.addEventListener('click', function () {
  kepcsinalo('https://files.slack.com/files-pri/T0E3ZD06M-F0EGVSLUX/masnap.png');
});

window.addEventListener('scroll', function () {
  console.log('scroll');
  console.log(window.scrollY);
})

//cica kutya kepvalto
var cicagomb = document.querySelector('.kerekcicat');
var kutyagomb = document.querySelector('.kerekkutyat');
var valtoskep = document.querySelector('.cicakutyakep');

kutyagomb.addEventListener('click', function() {
  valtoskep.setAttribute('src', 'http://users2.ml.mindenkilapja.hu/users/kutyavilag-krisz/uploads/fiatal-feher-kis-kutya-kep.jpg')
})

cicagomb.addEventListener('click', function() {
  valtoskep.setAttribute('src', 'http://static.hatterkepek.hu/preview/Allatok/Cica/Cica005.jpg')
})
