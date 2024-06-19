// Script para o menu hamburger
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentSlide = 0;
const slideWidth = slides[0].offsetWidth;



/*JS do carrossel*/
function goToSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

prevButton.addEventListener('click', () => goToSlide(currentSlide - 1));
nextButton.addEventListener('click', () => goToSlide(currentSlide + 1));

let autoSlideInterval = setInterval(() => goToSlide(currentSlide + 1), 6000); // Altera a imagem a cada 6 segundos

// Pausa o carrossel quando o mouse passar sobre ele
carousel.addEventListener('mouseover', () => clearInterval(autoSlideInterval));

// Reinicia o carrossel quando o mouse sair
carousel.addEventListener('mouseout', () => autoSlideInterval = setInterval(() => goToSlide(currentSlide + 1), 6000));



