const mainNav = document.querySelector(".header__nav");
const navMenu = document.querySelector(".header__hamburger");
const container = document.querySelector(".container");

navMenu.addEventListener("click", () => {
  mainNav.classList.toggle("header__nav--open");
  navMenu.classList.toggle("header__nav--close");
});

mainNav.addEventListener("click", () => {
  mainNav.classList.remove("header__nav--open");
  navMenu.classList.remove("header__nav--close");
});
