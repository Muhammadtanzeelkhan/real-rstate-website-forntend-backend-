'use strict';

// sab elements select karo
const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const header = document.querySelector("[data-header]");

// navbar toggle
navToggler.addEventListener("click", () => {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
});

// scroll ke time header shrink/active
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


