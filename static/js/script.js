
/*===== Change header / navbar styles on scroll =====*/
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('nav-scroll', window.scrollY > 0);
});

/*===== Show & hide <header/navbar> Menu =====*/
const menu = document.querySelector(".nav__list");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

/*----- Open <menu> when click on humburger icon -----*/
openBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";
});

/*----- Close <menu> when click on X icon -----*/
const closeMenu = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
};

closeBtn.addEventListener('click', closeMenu);