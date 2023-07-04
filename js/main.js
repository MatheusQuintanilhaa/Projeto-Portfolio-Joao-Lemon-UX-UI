//Declarando Variáveis
let btnContact = document.querySelector('.jl-btn-contact');
let toggleModal = document.querySelectorAll('.jl-toggle-modal');
let toggleMenu = document.querySelectorAll('.jl-toggle-menu');
let menuMobile = document.querySelector('.jl-menu-mob');
let btnMenuMobIcon = document.querySelector('.jl-btn-menu-mob ion-icon');

//Page Preloader
window.addEventListener('load', function () {
    let pagePreloder = document.querySelector('.jl-preloader');
    pagePreloder.classList.add('jl-fade-out');

    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener('click', function () {
    let boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
});

//Abrindo e Fechando o Menu Mobile
for (let m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListener('click', function () {
        let overlay = document.querySelector('.jl-menu-overlay');
        overlay.classList.toggle('jl-is-open');
        menuMobile.classList.toggle('jl-menu-is-closed');
        menuMobile.classList.toggle('jl-menu-is-open');

        let icon = btnMenuMobIcon.getAttribute('name');

        if (icon === 'menu') {
            btnMenuMobIcon.setAttribute('name', 'close');
        } else {
            btnMenuMobIcon.setAttribute('name', 'menu');
        }

    });
}



//Abrindo e Fechando o Modal de Orcamento
for (let i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        let modalOrcamento = document.querySelector('#jl-modal-orcamento');
        let overlay = document.querySelector('.jl-overlay');
        overlay.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-slide-top-in');
    });
}


// Animando Elementos da Topbar
let triggerTopbar = document.querySelector('.jl-trigger-topbar');
let topbar = document.querySelector('.jl-topbar');
let logo = document.querySelector('.jl-logo');
let waypoint = new Waypoint({
    element: triggerTopbar,
    handler: function () {
        topbar.classList.toggle('jl-topbar-bg');
        logo.classList.toggle('jl-logo-shorten');
        logo.classList.toggle('jl-logo-big');
    },
    offset: '50px'
});
