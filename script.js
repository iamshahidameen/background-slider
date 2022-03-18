/*This is my background slider with minor issue in console when sliding with Left Arrow Button*/
/*
const body = document.body;
const totalSlides = document.querySelectorAll('.slide');
const leftSlide = document.getElementById('left');
const rightSlide = document.getElementById('right');

let activeSlide = 0;



setfirstSlidetoBg(activeSlide);
function setfirstSlidetoBg(slideNumber){
    body.style.backgroundImage = totalSlides[activeSlide].style.backgroundImage;
}
leftSlide.addEventListener('click', () => {
    if(activeSlide < 0){
        activeSlide = totalSlides.length - 1;
    } else {
        
    }
    activeSlide--;

    setActiveSlide();
    function setActiveSlide(){
    totalSlides.forEach(slide => {
        slide.classList.remove('active');
        totalSlides[activeSlide].classList.add('active');
    })
}
setfirstSlidetoBg(activeSlide);

})
rightSlide.addEventListener('click', () => {
    if(activeSlide >= totalSlides.length - 1){
        activeSlide = 0;
    } else {
        activeSlide++;
    }
    

    setActiveSlide();
    function setActiveSlide(){
    totalSlides.forEach(slide => {
        slide.classList.remove('active');
        totalSlides[activeSlide].classList.add('active');
    })
}
setfirstSlidetoBg(activeSlide);

})

*/

/* Other Similar Method */

const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}