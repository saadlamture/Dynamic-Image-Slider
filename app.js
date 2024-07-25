const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.children.length;
    updateSlidePosition();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
    updateSlidePosition();
});

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

