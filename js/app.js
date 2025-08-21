const hamburger = document.querySelector(".navbar__icon");
const popupMenu = document.querySelector(".popup-menu");

hamburger.addEventListener("click", () => {
  popupMenu.classList.toggle("active");
});


const buttons = document.querySelectorAll(".mobile-nav button");
const popups = document.querySelectorAll(".popup");
const closes = document.querySelectorAll(".popup__close");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let popupId = btn.getAttribute("data-popup");
    document.getElementById(popupId).style.display = "flex";
  });
});

closes.forEach((close) => {
  close.addEventListener("click", () => {
    close.closest(".popup").style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  popups.forEach((popup) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
