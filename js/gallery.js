const thumbnails = document.querySelectorAll(".gallery__thumbnail img");
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup__img");
const popupClose = document.querySelector(".popup__close");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    popup.classList.remove("hidden");
    popupImg.src = thumbnail.src;
    popupImg.alt = thumbnail.alt;
  });
});

popupClose.addEventListener("click", () => {
  popup.classList.add("hidden");
});
