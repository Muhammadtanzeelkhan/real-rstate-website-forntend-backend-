'use strict';

// Select elements
const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const header = document.querySelector("[data-header]");


// Navbar toggle
navToggler.addEventListener("click", () => {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
});

// Scroll - header shrink/active
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Alternative concise header scroll
const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

// Add to favorite button toggle
const $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});
