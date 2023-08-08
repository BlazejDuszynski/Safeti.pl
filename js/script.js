// // burger menu activation start

// gsap.registerPlugin(ScrollTrigger);

// const hamburger = document.querySelector(".header__burgerMenu");
// const navMenu = document.querySelector(".header__navList");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// });

// // burger menu activation end

// gsap.from(".hero__heading", {
//   duration: 1,
//   opacity: 0,
//   y: 50,
// });

// gsap.from(".hero__paragraph", {
//   duration: 1,
//   opacity: 0,
//   y: 50,
//   delay: 0.4,
// });

// gsap.from(".hero__button", {
//   duration: 1,
//   opacity: 0,
//   y: 50,
//   delay: 0.6,
// });

// //animating aboutUs section

// // let aboutUsParagraphs = gsap.utils.toArray(".aboutUs__paragraph");

// gsap.to(".aboutUs__header", {
//   opacity: 1,
//   duration: 1,
//   repeat: 0,
//   scrollTrigger: {
//     trigger: ".aboutUs__header",
//     start: "top 85%",
//     toggleActions: "play none none none",
//     // markers: true,
//   },
// });

// gsap.utils.toArray(".aboutUs__animatedSection").forEach((section) => {
//   gsap.to(paragraph, {
//     opacity: 1,
//     duration: 1,
//     repeat: 0,
//     scrollTrigger: {
//       trigger: paragraph,
//       start: "top 85%",
//       toggleActions: "play none none none",
//       // markers: true,
//     },
//   });
// });

// gsap.to(".aboutUs__button", {
//   opacity: 1,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".aboutUs__button",
//     start: "top 85%",
//     toggleActions: "play none none none",
//     // markers: true,
//   },
// });

// gsap.to(".aboutUs__image--first", {
//   y: 50,
//   opacity: 1,
//   scrollTrigger: {
//     trigger: ".aboutUs__imagesContainer",
//     start: "top center",
//     toggleActions: "play none none none",
//   },
// });

// gsap.fromTo(
//   ".aboutUs__image--second",
//   { opacity: 0, x: "-=100%", y: 50 },
//   {
//     opacity: 1,
//     x: -30,
//     y: 50,
//     duration: 1,
//     scrollTrigger: {
//       trigger: ".aboutUs__imagesContainer",
//       start: "top center",
//       toggleActions: "play none none none",
//     },
//   }
// );

// gsap.fromTo(
//   ".aboutUs__image--first",
//   { x: "-100%" },
//   {
//     opacity: 1,
//     x: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: ".aboutUs__imagesContainer",
//       start: "top center",
//       toggleActions: "play none none none",
//     },
//   }
// );

// gsap.utils.toArray(".offer__card").forEach((card) => {
//   gsap.fromTo(
//     card,
//     {
//       y: 100,
//       opacity: 0,
//     },
//     {
//       y: 0,
//       opacity: 1,
//       scrollTrigger: {
//         trigger: card,
//         start: "top 50%+=100px",
//       },
//     }
//   );
// });

// ScrollTrigger.batch(".opinions__Card", {
//   start: "top 50%+=10px",
//   markers: false,
//   onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: -50, stagger: 0.2 }),
// });

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".hero__header",
  {
    y: -50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.2,
  }
);

gsap.fromTo(
  ".hero__heading",
  {
    opacity: 0,
    y: 50,
  },
  {
    opacity: 1,
    y: 0,
    delay: 0.2,
    duration: 1,
  }
);

gsap.fromTo(
  ".hero__paragraph",
  {
    opacity: 0,
    y: 50,
  },
  {
    opacity: 1,
    y: 0,
    delay: 0.4,
    duration: 1,
  }
);

gsap.fromTo(
  ".hero__button",
  {
    opacity: 0,
    y: 50,
  },
  {
    opacity: 1,
    y: 0,
    delay: 0.6,
    duration: 1,
  }
);

gsap.utils.toArray(".aboutUs__animatedSection").forEach((section) => {
  gsap.to(section, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    repeat: 0,
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });
});

ScrollTrigger.batch(".offer__card", {
  onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.2 }),
  start: "top 70%",
});

ScrollTrigger.batch(".segments__card", {
  onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.2 }),
  start: "top 85%",
});

ScrollTrigger.batch(".opinions__Card", {
  onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.2 }),
  start: "top 85%",
});
