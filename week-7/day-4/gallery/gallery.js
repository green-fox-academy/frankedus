'use strict';

var prevButton = document.querySelector('.move-prev')
var nextButton = document.querySelector('.move-next')
var currentPic = document.querySelector('.current-pic')

var imagesArray = ['images/DSCF2502.jpg',
                   'images/DSCF2504.jpg',
                   'images/DSCF2687.jpg',
                   'images/DSCF2690.jpg',
                   'images/DSCF2820.jpg',
                   'images/DSCF2870.jpg',
                   'images/DSCF2886.jpg',
                   'images/DSCF2685.jpg',
                   'images/DSCF4881.jpg'
                 ];

var currentIndex = 0;

nextButton.addEventListener('click', function() {
  currentIndex++;
  
  if (currentIndex > imagesArray.length - 1) {
    currentIndex = 0;
  }
  currentPic.setAttribute('src', imagesArray[currentIndex]);
  nextButton.setAttribute('src', imagesArray[currentIndex + 1]);
  prevButton.setAttribute('src', imagesArray[currentIndex - 1]);

})

prevButton.addEventListener('click', function() {
  currentIndex--;
  if (currentIndex === -1) {
    currentIndex = imagesArray.length - 1;
  }
  currentPic.setAttribute('src', imagesArray[currentIndex]);
  nextButton.setAttribute('src', imagesArray[currentIndex - 1]);
  prevButton.setAttribute('src', imagesArray[currentIndex + 1]);
})
