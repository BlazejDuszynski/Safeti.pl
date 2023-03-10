// fade in offer items start
const offerFadeInItems = document.querySelectorAll(".offer__item");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("offer__item--transitioned", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: 0.5
})

offerFadeInItems.forEach(offerFadeInItem => {
    observer.observe(offerFadeInItem);
});

//fade in offer items end
// burger menu activation start

const hamburger = document.querySelector(".header__burgerMenu");
const navMenu = document.querySelector(".header__navList");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// burger menu activation end
