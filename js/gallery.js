const thumbnails = document.querySelectorAll(".gallery__thumbnail img");
const popup = document.querySelector(".popup");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    popup.classList.remove("hidden");
  });
});
