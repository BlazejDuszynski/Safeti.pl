// fade in offer items start
// const offerFadeInItems = document.querySelectorAll(".offer__item");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       entry.target.classList.toggle(
//         "offer__item--transitioned",
//         entry.isIntersecting
//       );
//       if (entry.isIntersecting) observer.unobserve(entry.target);
//     });
//   },
//   {
//     threshold: 0.5,
//   }
// );

// offerFadeInItems.forEach((offerFadeInItem) => {
//   observer.observe(offerFadeInItem);
// });

//fade in offer items end
// burger menu activation start

const hamburger = document.querySelector(".header__burgerMenu");
const navMenu = document.querySelector(".header__navList");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// burger menu activation end

gsap.from(".hero__heading", {
  duration: 1,
  opacity: 0,
  y: 50,
});

gsap.from(".hero__paragraph", {
  duration: 1,
  opacity: 0,
  y: 50,
  delay: 0.4,
});

gsap.from(".hero__button", {
  duration: 1,
  opacity: 0,
  y: 50,
  delay: 0.6,
});

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Select the SVG groups
  const house = document.getElementById("house");
  const person = document.getElementById("person");
  const camera = document.getElementById("camera");
  const tools = document.getElementById("tools");

  // Set initial states for opacity
  gsap.set([person, tools, camera], { opacity: 0 });

  // Create the GSAP timeline
  const timeline = gsap.timeline();

  // Add animations to the timeline
  timeline
    .to(person, { opacity: 1, x: 40, duration: 1, delay: 1 })
    .to(tools, { opacity: 1, x: 40, duration: 1, delay: 0.05 })
    .to(camera, { opacity: 1, x: 40, duration: 1 });
});

// timeline.fromTo(
//   camera,
//   { opacity: 0, x: 40 },
//   { opacity: 1, x: 40, duration: 1, delay: 1.5 }
// );
