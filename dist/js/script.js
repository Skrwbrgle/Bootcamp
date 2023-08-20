//navbar fiexd
window.onscroll = function () {
  const header = document.querySelector("header");
  const scroll = document.querySelector("#sticky");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    scroll.classList.remove("scroll-nav");
  } else {
    header.classList.remove("navbar-fixed");
    scroll.classList.add("scroll-nav");
  }
};

//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
