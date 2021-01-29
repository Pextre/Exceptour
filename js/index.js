const selectElement = (e) => document.querySelector(e);
const selectByID = (id) => document.getElementById(id);
const selectAllElements = (e) => document.querySelectorAll(e);

const navToggle = selectElement(".nav__menu");
const navLinks = selectAllElements(".nav-list__item");
const carrosselItens = selectAllElements(".carrossel__item");
const carrosselLinks = selectAllElements(".carrossel__link");
const tempoTotalCarrossel = 10000; // 10 segundos
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

let slideAtual = 0;
girarCarrossel();

function girarCarrossel() {
    let i;
    for (i = 0; i < carrosselItens.length; i++) {
        carrosselItens[i].classList.remove("carrossel__item--active");
    }

    carrosselItens.forEach((elemeto, index) => {
        carrosselItens[index].classList.remove("carrossel__item--active");
        carrosselLinks[index].classList.remove("carrossel__link--active");
    });

    slideAtual++;
    if (slideAtual > carrosselItens.length) {
        slideAtual = 1;
    }

    carrosselLinks[slideAtual - 1].classList.add("carrossel__link--active");
    carrosselItens[slideAtual - 1].classList.add("carrossel__item--active");
    setTimeout(girarCarrossel, 5000);
}
