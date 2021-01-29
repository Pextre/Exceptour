const selectElement = (e) => document.querySelector(e);
const selectByID = (id) => document.getElementById(id);
const selectAllElements = (e) => document.querySelectorAll(e);

const navToggle = selectElement(".nav__menu");
const navLinks = selectAllElements(".nav-list__item");

//  MENU ----------------------------------------------------------------
navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav__open");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.toggle("nav__open");
    });
});
// ------------------------------------------------------------------

//  Carrossel ----------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    let splide = new Splide("#splide", {
        type: "loop",
        direction: "ttb",
        height: "550px",
        arrowPath:
            "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
        autoplay: true,
        resetProgress: true,
    });
    splide.mount();
});
// ------------------------------------------------------------------
