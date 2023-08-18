const thumbnails = document.querySelectorAll(".gallery__thumbnail img");
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup__img");
const popupClose = document.querySelector(".popup__close");
const arrowLeft = document.querySelector(".popup__arrow--left");
const arrowRight = document.querySelector(".popup__arrow--right");

let currentImgIndex;

const showNextImage = () => {
  if (currentImgIndex === thumbnails.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  popupImg.src = thumbnails[currentImgIndex].src;
  console.log(currentImgIndex);
};

const showPrevImage = () => {
  if (currentImgIndex === 0) {
    currentImgIndex = thumbnails.length - 1;
  } else {
    currentImgIndex--;
  }
  popupImg.src = thumbnails[currentImgIndex].src;
};

const closePopup = () => {
  popup.classList.add("hidden");
};

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", (e) => {
    popup.classList.remove("hidden");
    popupImg.src = e.target.src;
    popupImg.alt = e.target.alt;
    currentImgIndex = index;
  });
});

popupClose.addEventListener("click", closePopup);

arrowRight.addEventListener("click", showNextImage);

arrowLeft.addEventListener("click", showPrevImage);

document.addEventListener("keydown", (e) => {
  if (!popup.classList.contains("hidden")) {
    if (e.code === "ArrowRight" && e.keyCode === 39) {
      showNextImage();
    }
    if (e.code === "ArrowLeft" && e.keyCode === 37) {
      showPrevImage();
    }
    if (e.code === "Escape" && e.keyCode === 27) {
      closePopup();
    }
  }
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    closePopup();
  }
});
