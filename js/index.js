const selectElement = (e) => document.querySelector(e);
const selectByID = (id) => document.getElementById(id);
const selectAllElements = (e) => document.querySelectorAll(e);

const navToggle = selectElement(".nav__menu");
const navLinks = selectAllElements(".nav-list__item");
const testemunhos = selectAllElements(".testemunho");
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
    let sobreSplide = new Splide("#splide--sobre", {
        type: "loop",
        direction: "ttb",
        height: "550px",
        fixedHeight: "550px",
        arrowPath:
            "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
        autoplay: true,
        resetProgress: true,
        perPage: 1,
    });
    sobreSplide.mount();

    let testemunhosSplide = new Splide("#splide--testemunhos", {
        type: "loop",
        perPage: 2,
        focus: "center",
        fixedHeight: "350px",
        gap: "1em",
        autoplay: true,
        resetProgress: true,
        autoWidth: true,
        interval: 3000,
        speed: 650,
    });

    testemunhosSplide.mount();
    testemunhos[0].classList.add("testemunho--ativo");

    testemunhosSplide.on("move", function (newIndex, oldIndex, destIndex) {
        testemunhos[0].classList.remove("testemunho--ativo");
        testemunhos.forEach((testemunho, index) => {
            if (index === newIndex) {
                testemunho.style.opacity = 1;
            } else {
                testemunho.style.opacity = 0.35;
            }
        });
    });
});
// ------------------------------------------------------------------
