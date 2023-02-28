const burgerMenu = document.querySelector('.burger-menu');
const navbarLinks = document.querySelector('.navbar-links');

burgerMenu.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

var navbarScroll = document.getElementById("navbar");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    navbarScroll.classList.add("scroll");
  } else {
    navbarScroll.classList.remove("scroll");
  }
};