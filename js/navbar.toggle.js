const toggleHide = () => {
  const menu = document.getElementById("navbar-menu");
  menu.classList.toggle("hide");
  const over = document.getElementById("over");
  over.classList.toggle("hide");
  const btnToggle = document.getElementById("button-toggle");
  btnToggle.classList.toggle("active");
};

const navItem = document.getElementsByClassName("nav-item");
for (let index = 0; index < navItem.length; index++) {
  navItem[index].addEventListener("click", toggleHide);
}
const over = document.getElementById("over");
over.addEventListener("click", toggleHide);
const btnToggle = document.getElementById("button-toggle");
btnToggle.addEventListener("click", toggleHide);
