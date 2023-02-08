const hamburger = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenuIcon = document.querySelector(".close-menu-icon");
const overlay = document.querySelector(".overlay");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu li");

const bookmark = document.querySelector(".bookmark-bar");
const bookmarkCircle = document.querySelector(".circle");
const bookmarkCircleIcon = document.querySelector(".circle-icon");
const bookmarkSpan = document.querySelector(".bookmark-span");

const openModalbuttons = document.querySelectorAll(".open-modal");
const modal = document.querySelector(".selection-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const modalCloseIcon = document.querySelector(".modal-close-icon");

const checkboxes = document.querySelectorAll(".checkbox-container input");

const successButtons = document.querySelectorAll(".continue-success");
const dollarProgress = document.querySelector("#dollar-progress");
const backers = document.querySelector("#backers-progress");
const bambooRemaining = document.querySelectorAll(".bamboo-remaining");
const blackRemaining = document.querySelectorAll(".black-remaining");
const progressBarStatus = document.querySelector(".progress-bar-status");

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

openModalbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("bamboo-focus")) {
      checkboxes[1].click();
    }
    if (button.classList.contains("black-focus")) {
      checkboxes[2].click();
    }
    modal.style.display = "block";
    modalOverlay.style.display = "block";
  });
});

modalCloseIcon.addEventListener("click", () => {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
    checkbox.parentNode.parentNode.parentNode.classList.remove("active");
  });
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    if (
      checkbox.parentNode.parentNode.parentNode.classList.contains("active")
    ) {
      checkbox.parentNode.parentNode.parentNode.classList.toggle("active");
    } else {
      checkboxes.forEach((checkbox) => {
        checkbox.parentNode.parentNode.parentNode.classList.remove("active");
        checkbox.checked = false;
      });
      checkbox.parentNode.parentNode.parentNode.classList.add("active");
      checkbox.checked = true;
    }
  });
});

successButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // update dollar progress

    progressNumber = dollarProgress.innerHTML.slice(1).replace(/,/g, "");

    updatedNumber =
      parseInt(progressNumber) +
      parseInt(button.previousSibling.previousSibling.value);

    dollarProgress.innerHTML = "$" + updatedNumber.toLocaleString();

    //update backers

    backers.innerHTML = (
      parseInt(backers.innerHTML.replace(/,/g, "")) + 1
    ).toLocaleString();

    // update progress bar

    progressBarStatusPercentage = (updatedNumber / 100000) * 100;

    if (progressBarStatusPercentage <= 100) {
      progressBarStatus.style.width = `${progressBarStatusPercentage}%`;
    } else {
      progressBarStatus.style.width = "100%";
    }

    //update remaining amount of rewards

    if (button.classList.contains("bamboo-success")) {
      bambooRemaining.forEach((bamboo) => {
        bamboo.innerHTML = bamboo.innerHTML - 1;
      });
    }
    if (button.classList.contains("black-success")) {
      blackRemaining.forEach((black) => {
        black.innerHTML = black.innerHTML - 1;
      });
    }

    //close modal and uncheck all options

    modalCloseIcon.click();
  });
});
