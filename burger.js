function menu() {
    document.querySelector(".mobile__menu").classList.toggle("mobile__menu-active")
    document.querySelector(".menu__icon-content .button__cart").classList.toggle("__cart__button-active")
    document.querySelector(".menu__icon-content .button_login").classList.toggle("__cart__button-active")
    document.querySelector(".menu__icon-content .menu__close-ico").classList.toggle("__fa__close-active")
    document.querySelector(".menu__icon-content .menu__icon").classList.toggle("__menu__icon-active")
}