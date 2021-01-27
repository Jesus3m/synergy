const toggleHide = () => {
  const menu = document.getElementById("navbar-menu");
  menu.classList.toggle("hide");
  const over = document.getElementById("over");
  over.classList.toggle("hide");
  const btnToggle = document.getElementById("button-toggle");
  btnToggle.classList.toggle("act");
};

const navItem = document.getElementsByClassName("nav-item");
for (let index = 0; index < navItem.length; index++) {
  navItem[index].addEventListener("click", () => {
    const over = document.getElementById("over");
    over.classList.add("hide");
    const menu = document.getElementById("navbar-menu");
    menu.classList.add("hide");
    const btnToggle = document.getElementById("button-toggle");
    btnToggle.classList.remove("act");
  });
}
const over = document.getElementById("over");
over.addEventListener("click", toggleHide);
const btnToggle = document.getElementById("button-toggle");
btnToggle.addEventListener("click", toggleHide);

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (y <= 300) {
    const nav = document.getElementById("main-nav");
    nav.classList.add("navbar-top");
  } else {
    const nav = document.getElementById("main-nav");
    nav.classList.remove("navbar-top");
  }
  if (y > 1500) {
    const nav = document.getElementById("main-nav");
    nav.classList.add("navbar-hide");
  } else {
    const nav = document.getElementById("main-nav");
    nav.classList.remove("navbar-hide");
  }
});

function openItem(e) {
  e.children[0].classList.add("show");
  e.addEventListener("mouseleave", () => {
    e.children[0].classList.remove("show");
  });
}
