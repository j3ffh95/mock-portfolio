let menuToggle = document.querySelector(".menu-toggle");
let menuWrap = document.querySelector(".main-nav-wrap");

const openNav = (event) => {
  menuWrap.classList.toggle("showNav");
  menuToggle.classList.toggle("is-clicked");
};

menuToggle.addEventListener("click", openNav);
