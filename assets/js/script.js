const burgerMenu = document.querySelector('.burger-menu');
const navbarLinks = document.querySelector('.navbar-links');

burgerMenu.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

window.addEventListener("scroll", function() {
  var navbar = document.querySelector("nav");
  navbar.classList.toggle("scrolled", window.scrollY > 0);
});