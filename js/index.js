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
    new Splide("#splide", {
        direction: "ttb",
        height: "90vh",
    }).mount();
});
// ------------------------------------------------------------------
