const thumbnails = document.querySelectorAll(".gallery__thumbnail img");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    popup.classList.remove("hidden");
  });
});

popupClose.addEventListener("click", () => {
  popup.classList.add("hidden");
});
