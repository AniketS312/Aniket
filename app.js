const icon = document.querySelectorAll(".dropdown");
const scrollButton = document.getElementById("scroll");
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

window.onscroll = function () {
  if (window.scrollY > 500) {
    scrollButton.style.opacity = "1";
  } else {
    scrollButton.style.opacity = "0";
  }
};
