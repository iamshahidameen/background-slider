const body = document.body;
const totalSlides = document.querySelectorAll('.active');
const leftSlide = document.getElementById('left');
const rightSlide = document.getElementById('right');

let activeSlide = 2;

setfirstSlidetoBg(activeSlide);

function setfirstSlidetoBg(slideNumber){
    body.style.backgroundImage = totalSlides[slideNumber].style.backgroundImage;
}
