const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const searchBarBtn = document.querySelector('.icon-searchBar');
const inputSearchBar = document.querySelector('.inputSearchBar');
const formRegister = document.getElementById("formRegister");
const formLogin = document.getElementById("formLogin");
const menuMobile = document.querySelector(".menuMobile");
const openMenu = document.getElementById("open-menu");
const slider = document.querySelectorAll('.slider')
const sliderDropDown = document.querySelectorAll('.sliderDropDown');
const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdownMenu');
let header = document.getElementById("header");
let image = [
    "url('assets/images/image 62.png')",
    "url('assets/images/image 129.png')",
    "url('assets/images/image 130.png')",
    "url('assets/images/image 131.png')"
];
let index = 0;
let i = 0;
let n;
// get mode
window.onload = () => {
        const getStatus = JSON.parse(localStorage.getItem('mode'));
        moon.classList.remove("activeMode");
        sun.classList.remove("activeMode");
        switch (getStatus) {
            case 'moon':
                document.body.classList.add('dark');
                moon.classList.add("activeMode");
                break;
            case 'sun':
                document.body.classList.remove('dark');
                sun.classList.add("activeMode");
                break;
            default:
                document.body.classList.add('dark');
                moon.classList.add("activeMode");
                break;
        }
    }
    // background slider
const backward = () => {
    index--;
    if (index < 0) {
        index = image.length - 1;
    }
    header.style.backgroundImage = image[index];
};
const forward = () => {
    index++;
    if (index > image.length - 1) {
        index = 0;
    }
    header.style.backgroundImage = image[index];
};
setInterval(function() {
    index++;
    if (index > image.length - 1) {
        index = 0;
    }
    header.style.backgroundImage = image[index];
}, 5000);
// switch mode
function darkMode(element, mode) {
    for (let index = 0; index < element.parentNode.children.length; index++) {
        element.parentNode.children[index].classList.remove('activeMode');
    }
    element.classList.add('activeMode');
    if (mode === 'moon') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    localStorage.setItem('mode', JSON.stringify(mode))
}
// event click for btn search bar
searchBarBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (inputSearchBar.style.display === 'block') {
            inputSearchBar.style.display = 'none';
        } else {
            inputSearchBar.style.display = 'block';
        }
    })
    // change style form
function changeStatus(element, status) {
    for (let index = 0; index < element.parentNode.children.length; index++) {
        element.parentNode.children[index].classList.remove('activeStatus');
    }
    element.classList.add('activeStatus');
    if (status === 'login') {
        formRegister.classList.remove('formStatusActive');
        formLogin.classList.add('formStatusActive');
    } else if (status === 'register') {
        formRegister.classList.add('formStatusActive');
        formLogin.classList.remove('formStatusActive');
    }
}

// Burger menu

openMenu.addEventListener('click', (ev) => {
    menuMobile.classList.toggle('activeMobileMenu');
})
dropdownToggle.addEventListener('click', () => {
        dropdownMenu.classList.toggle('activeDropDown');
    })
    // start slider
function backSlidediNone() {
    for (n = 0; n < slider.length; n++) {
        slider[n].style.display = "none";
    }
}

function btnSliderRight() {
    i++;
    if (i > slider.length - 1) {
        i = 0;
    }
    backSlidediNone();
    slider[i].style.display = "block";
}

function btnSliderLeft() {
    i--;
    if (i < 0) {
        i = slider.length - 1;
    }
    backSlidediNone();
    slider[i].style.display = "block";
}
setInterval(() => {
    i++;
    if (i > slider.length - 1) {
        i = 0;
    }
    backSlidediNone();
    slider[i].style.display = "block";
}, 10000);
// dropDownSlider
function backSlidediNoneDropDown() {
    for (n = 0; n < sliderDropDown.length; n++) {
        sliderDropDown[n].style.display = "none";
    }
}

function btnSliderRightDropDwon() {
    i++;
    if (i > sliderDropDown.length - 1) {
        i = 0;
    }
    backSlidediNoneDropDown();
    sliderDropDown[i].style.display = "block";
}

function btnSliderLeftDropDwon() {
    i--;
    if (i < 0) {
        i = sliderDropDown.length - 1;
    }
    backSlidediNoneDropDown();
    sliderDropDown[i].style.display = "block";
}
setInterval(() => {
    i++;
    if (i > sliderDropDown.length - 1) {
        i = 0;
    }
    backSlidediNoneDropDown();
    sliderDropDown[i].style.display = "block";
}, 10000);
// section categoty
function activeCategory(element) {
    for (let index = 0; index < element.parentNode.children.length; index++) {
        element.parentNode.children[index].classList.remove('activeCategory');
    }
    element.classList.add('activeCategory');
}
// //swiper slider 
var swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
});

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     grid: {
//         rows: 2,
//     },
// });

//The Best Seller
const slides = document.querySelectorAll(".slide");

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
}
for (const slide of slides) {
    slide.addEventListener("click", () => {
        clearActiveClasses();
        slide.classList.add("active");
    });
}