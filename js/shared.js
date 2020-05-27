var mobileToggle = document.querySelector(".toggle-button");
var mobileMenu = document.querySelector(".mobile-nav");
var backdrop = document.querySelector(".backdrop");

mobileToggle.addEventListener("click", function() {
    mobileMenu.classList.toggle("open");
    backdrop.classList.toggle("open");
  });

backdrop.addEventListener("click", function() {
    mobileMenu.classList.toggle("open");
    backdrop.classList.toggle("open");
  });