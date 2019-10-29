const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector;

navLinks.inert = true;

hamburger.addEventListener("click", () => {
  navLinks.toggleAttribute("inert");
  navLinks.classList.toggle("open");
});

hamburger.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    navLinks.classList.toggle("open");
    navLinks.toggleAttribute("inert");
  }
});
