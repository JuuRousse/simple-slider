const app = document.querySelector('#app').innerHTML = `
    <div class="container">
        <div class="slider">
            <div class="slider-counter">
                <div class="slider-prev">
                    <img src="./img/arrow-right-solid.svg" class="arrow arrow-prev" alt="prev">
                </div>
                <span class="counter counter-current" id="current">01</span>
                /
                <span class="counter" id="total">03</span>
                <div class="slider-next">
                    <img src="./img/arrow-right-solid.svg" class="arrow arrow-next" alt="next">
                </div>
            </div>
            <div class="slider-wrapper">
                <div class="slide fade">
                    <img src="./img/Mountains_in_Suzhou.jpg" alt="">
                </div>
                <div class="slide fade">
                    <img src="img/Red_Mountain_Pass.jpg" alt="">
                </div>
                <div class="slide fade">
                    <img src="img/the-trip-09-05-2017-17-23-42.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
`

const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');
const total = document.querySelector('#total');
const current = document.querySelector('#current');


let slideIndex = 1;

if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
} else {
    total.textContent = slides.length;
}

const showSlides = (n) => {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = "none");

    slides[slideIndex - 1].style.display = "block";

    if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }
}

showSlides(slideIndex);

const leafSlides = (n) => {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
    leafSlides(-1);
})

next.addEventListener('click', () => {
    leafSlides(1);
})