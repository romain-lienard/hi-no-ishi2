window.onscroll = function() {
  myFunction()
};
var navbar = document.querySelector(".nav");
var sticky = navbar.offsetTop;
var brand = document.querySelector(".main-nav__brand")

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    brand.style.display = "block";
  } else {
    navbar.classList.remove("sticky")
    brand.style.display = "none";
  }
}
