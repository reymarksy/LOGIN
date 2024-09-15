let slideIndex = 0;
let slideInterval;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
    }
}

function moveSlide(n) {
    let slides = document.querySelectorAll('.slide');
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
    resetTimer(); 
}

function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => moveSlide(1), 1000); 
}


showSlides();
slideInterval = setInterval(() => moveSlide(1), 1000); 
document.querySelector('.slider').addEventListener('mouseover', () => clearInterval(slideInterval));
document.querySelector('.slider').addEventListener('mouseout', () => resetTimer());


        
       