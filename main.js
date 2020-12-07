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
  // Check to see if the element clicked has an atrribute of href
  if (event.target.matches("[href]")) {
    let activeChild = event.target;
    activeChild.classList.add("active");
    Array.from(activeChild.parentElement.children).forEach((child) => {
      if (child !== activeChild) {
        child.classList.remove("active");
      }
    });
  }
  // console.log(event.target);
};

document.addEventListener("click", openNav);
