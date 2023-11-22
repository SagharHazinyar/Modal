"use strict";
const modal = document.querySelector(".modal");
const show_modal = document.querySelectorAll(".show-modal"); // lenght = 3
const close_modal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const displayModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const hideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < show_modal.length; i++) {
  show_modal[i].addEventListener("click", displayModal);
}

close_modal.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key == "Escape" && event.classList.contains("hidden")) {
    hideModal();
  }
});
