export function navMobile() {
    const navMobile = document.querySelector('.nav-mobile');
    const openButton = document.querySelector('.header__burger');
    const closeButton = document.querySelector('.nav-mobile__close');

    openButton.addEventListener('click', () => {
        navMobile.classList.add('nav-mobile--opened');
    })

    closeButton.addEventListener('click', () => {
        navMobile.classList.remove('nav-mobile--opened');
    })

    navMobile.addEventListener('click', () => {
        navMobile.classList.remove('nav-mobile--opened');
    })
}