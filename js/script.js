//The Best Seller
const slides = document.querySelectorAll(".slide");
for (const slide of slides) {
    slide.addEventListener("click", () => {
        clearActiveClasses();
        slide.classList.add("active");
    });
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
}


//swiper slider 
var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
});