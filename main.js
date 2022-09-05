const SLIDER_WRAPPER = document.querySelector('.wrapper-slider');
const LEFT_SIDE = document.querySelector('.left-side');
const RIGHT_SIDE = document.querySelector('.right-side');
const UP_BTN = document.querySelector('.up-btn');
const DOWN_BTN = document.querySelector('.down-btn');
const NO_OF_SLIDES = RIGHT_SIDE.querySelectorAll('div').length

console.log(NO_OF_SLIDES)

let currentSlideIndex = 0;

RIGHT_SIDE.style.top = `-${((NO_OF_SLIDES) - 1) * 100}vh`;

UP_BTN.addEventListener('click', () => changeSlide('up'));
DOWN_BTN.addEventListener('click', () => changeSlide('down'))


function changeSlide(direction) {
    const sliderHeight = SLIDER_WRAPPER.clientHeight
    if (direction == 'up') {
        currentSlideIndex++;
        if (currentSlideIndex > NO_OF_SLIDES - 1) {
            currentSlideIndex = 0
        }
    } else if (direction == 'down') {
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
            currentSlideIndex = NO_OF_SLIDES - 1
        }
    }

    RIGHT_SIDE.style.transform = `translateY(${currentSlideIndex * sliderHeight}px)`;
    LEFT_SIDE.style.transform = `translateY(-${currentSlideIndex * sliderHeight}px)`;
}
