const hamburger = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenuIcon = document.querySelector(".close-menu-icon");
const overlay = document.querySelector(".overlay");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu li");

const bookmark = document.querySelector(".bookmark-bar");
const bookmarkCircle = document.querySelector(".circle");
const bookmarkCircleIcon = document.querySelector(".circle-icon");
const bookmarkSpan = document.querySelector(".bookmark-span");

hamburger.addEventListener("click", () => {
  hamburger.style.display = "none";
  mobileMenu.style.display = "block";
  overlay.style.display = "block";
  closeMenuIcon.style.display = "block";
});

closeMenuIcon.addEventListener("click", () => {
  hamburger.style.display = "block";
  mobileMenu.style.display = "none";
  overlay.style.display = "none";
  closeMenuIcon.style.display = "none";
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.style.display = "block";
    mobileMenu.style.display = "none";
    overlay.style.display = "none";
    closeMenuIcon.style.display = "none";
  });
});

let x = 1;

bookmark.addEventListener("click", () => {
  if (x === 1) {
    bookmarkCircle.style.fill = "hsl(176, 72%, 28%)";
    bookmarkCircleIcon.style.fill = "#fff";
    bookmarkSpan.style.color = "hsl(176, 72%, 28%)";
    bookmarkSpan.innerHTML = "Bookmarked";
    x = 0;
  } else {
    bookmarkCircle.style.fill = "#2F2F2F";
    bookmarkCircleIcon.style.fill = "#B1B1B1";
    bookmarkSpan.style.color = "hsl(0, 0%, 48%)";
    bookmarkSpan.innerHTML = "Bookmark";
    x = 1;
  }
});
