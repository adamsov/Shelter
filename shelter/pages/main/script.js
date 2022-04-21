const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const logoBurger = document.querySelector(".logo-burger");
const burgerButton = document.querySelector(".burger-header");
const nav = document.querySelector(".nav");
const startScreen = document.querySelector(".start-screen");
const navItems = document.querySelectorAll(".nav-item");


const toggleMenu = () => {
    body.classList.toggle('lock');
    overlay.classList.toggle('overlay--active');
    logoBurger.classList.toggle('logo-burger--active');
    burgerButton.classList.toggle('burger-header--active');
    nav.classList.toggle('nav--active');
    startScreen.classList.toggle('start-screen--active');
}

burgerButton.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
navItems.forEach((navItems) => navItems.addEventListener('click', toggleMenu));

