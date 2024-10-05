// toggling nav related
const handleToggle = () => {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
};

//smooth scrolling nav bg color change
const nav = document.querySelector("nav");

const handleScroll = () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", handleScroll);

//action link action
const menuLinks = document.querySelectorAll(".menu ul li a");
menuLinks.forEach((menu) => {
  menu.addEventListener("click", function (e) {
    menuLinks.forEach((items) => items.classList.remove("text_red"));
    this.classList.add("text_red");
  });
});
