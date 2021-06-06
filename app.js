const icon = document.querySelectorAll(".dropdown");
const scrollButton = document.getElementById("scroll");
const resumeButton = document.querySelectorAll("#resume");
const popup = document.getElementById("popup");
const exitPopup = document.getElementById("exit-popup");
const hiddenMenu = document.getElementById("hidden-menu");
const exitMenuButton = document.getElementById("menu-exit");
const showmenuButton = document.getElementById("show-menu");
const menuItems = document.querySelectorAll("#menu-item");
const exitButton = document.getElementById("contact-button");

// Make portfolio section work
icon.forEach((element) => {
  element.addEventListener("click", function (e) {
    // All Elements Execution
    e.preventDefault();
    for (let i = 0; i < icon.length; i++) {
      icon[i].parentElement.classList.remove("bottom-border");
      icon[i].parentElement.nextElementSibling.classList.remove("show");
    }
    // Single element execution
    showInfo(element);
  });
});

function showInfo(element) {
  element.style.transform = "translateX(180deg)";
  element.parentElement.classList.toggle("bottom-border");
  element.parentElement.nextElementSibling.classList.toggle("show");
}

// Show Back to top button
window.onscroll = function () {
  if (window.scrollY > 500) {
    scrollButton.style.opacity = "1";
  } else {
    scrollButton.style.opacity = "0";
  }
};

// Function to make popup work
// Make  popup appear
resumeButton.forEach((element) =>
  element.addEventListener("click", function () {
    popup.style.display = "flex";
  })
);

exitPopup.addEventListener("click", function () {
  popup.style.display = "none";
});
exitButton.addEventListener("click", function () {
  popup.style.display = "none";
});

// Hide/Show mobile menu
exitMenuButton.addEventListener("click", hideMenu);
showmenuButton.addEventListener("click", showmenu);
menuItems.forEach((element) => element.addEventListener("click", hideMenu));

function hideMenu() {
  hiddenMenu.style.display = "none";
  console.log("clicked");
}

function showmenu() {
  hiddenMenu.style.display = "flex";
}
