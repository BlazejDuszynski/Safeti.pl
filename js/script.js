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

gsap.registerPlugin(ScrollTrigger);

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
    .to(person, { opacity: 1, x: 40, duration: 0.4, delay: 1 })
    .to(tools, { opacity: 1, x: 40, duration: 0.4, delay: 0.05 })
    .to(camera, { opacity: 1, x: 40, duration: 0.4 });
});

//animating aboutUs section

// let aboutUsParagraphs = gsap.utils.toArray(".aboutUs__paragraph");

gsap.to(".aboutUs__header", {
  opacity: 1,
  duration: 1,
  repeat: 0,
  scrollTrigger: {
    trigger: ".aboutUs__header",
    start: "top 85%",
    toggleActions: "play none none none",
    // markers: true,
  },
});

gsap.utils.toArray(".aboutUs__paragraph").forEach((paragraph) => {
  gsap.to(paragraph, {
    opacity: 1,
    duration: 1,
    repeat: 0,
    scrollTrigger: {
      trigger: paragraph,
      start: "top 85%",
      toggleActions: "play none none none",
      // markers: true,
    },
  });
});

gsap.to(".aboutUs__button", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".aboutUs__button",
    start: "top 85%",
    toggleActions: "play none none none",
    // markers: true,
  },
});

gsap.to(".aboutUs__image--first", {
  y: 50,
  opacity: 1,
  scrollTrigger: {
    trigger: ".aboutUs__imagesContainer",
    start: "top center",
    toggleActions: "play none none none",
  },
});

gsap.fromTo(
  ".aboutUs__image--second",
  { opacity: 0, x: "-=100%", y: 50 },
  {
    opacity: 1,
    x: -30,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".aboutUs__imagesContainer",
      start: "top center",
      toggleActions: "play none none none",
    },
  }
);

gsap.fromTo(
  ".aboutUs__image--first",
  { x: "-100%" },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".aboutUs__imagesContainer",
      start: "top center",
      toggleActions: "play none none none",
    },
  }
);

gsap.utils.toArray(".offer__card").forEach((card) => {
  gsap.fromTo(
    card,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: card,
        start: "top 50%+=100px",
      },
    }
  );
});

ScrollTrigger.batch(".opinions__Card", {
  start: "top 50%+=10px",
  markers: true,
  onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: -50, stagger: 0.2 }),
});
