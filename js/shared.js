var mobileToggle = document.querySelector(".toggle-button");
var mobileMenu = document.querySelector(".mobile-nav");
var backdrop = document.querySelector(".backdrop");

mobileToggle.addEventListener("click", function() {
    mobileMenu.style.display = "flex";
    setTimeout(function() {
      mobileMenu.classList.add("translatex250");
    });
    backdrop.style.display = "block";
    setTimeout(function() {
      backdrop.classList.add("appear");
    }, 10);
  });

backdrop.addEventListener("click", function() {
    mobileMenu.classList.remove("translatex250");
    mobileMenu.style.display = "none";
    backdrop.classList.remove("appear");
    backdrop.style.display = "none";
  });