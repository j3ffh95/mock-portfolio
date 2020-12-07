let menuToggle = document.querySelector(".menu-toggle");
let menuWrap = document.querySelector(".main-nav-wrap");

const openNav = (event) => {
  let cList = event.target.classList;
  if (cList.contains("menu-toggle") || cList.contains("menu-hamburger")) {
    menuWrap.classList.toggle("showNav");
    menuToggle.classList.toggle("is-clicked");
  } else {
    menuWrap.classList.remove("showNav");
    menuToggle.classList.remove("is-clicked");
  }
};

document.addEventListener("click", openNav);
