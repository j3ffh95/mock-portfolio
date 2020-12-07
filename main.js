let menuToggle = document.querySelector(".menu-toggle");
let menuWrap = document.querySelector(".main-nav-wrap");

const openNav = (event) => {
  if (menuWrap.style.display === "none") {
    menuWrap.style.display = "block";
  } else {
    menuWrap.style.display = "none";
  }
  menuToggle.classList.toggle("is-clicked");
};
menuToggle.addEventListener("click", openNav);
