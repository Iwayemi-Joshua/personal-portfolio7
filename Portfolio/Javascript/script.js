// Navbar
menuBtn = document.querySelector(".menuBtn");
var menu = document.getElementById("menu");

menuBtn.onclick = function () {
  navBar = document.querySelector(".links");
  navBar.classList.toggle("active");

  var links = document.getElementById("links");

  if (links.style.height == "300px") {
    links.style.height = "65px";
  } else {
    links.style.height = "300px";
  }
};

menu.addEventListener("click", function () {
  if (menu.classList.contains("fa-bars")) {
    menu.classList.replace("fa-bars", "fa-times");
  } else {
    menu.classList.replace("fa-times", "fa-bars");
  }
});

// Preloader

var preLoader = document.querySelector('.preloader');

window.addEventListener('load', vanish);

function vanish(){
  preLoader.classList.add('disappear');
};