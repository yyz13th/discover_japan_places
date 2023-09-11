(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 100) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

// burger handler

(function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const close = document.querySelector(".header__nav-close");
    const menuLinks = document.querySelectorAll('.header__link');
    burger.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    close.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('header__nav_active');
        });
    })
}());