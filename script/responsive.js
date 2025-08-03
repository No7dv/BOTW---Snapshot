const menuBurger = document.querySelector('.nav-burger');
const navList = document.querySelector('.nav-list');

menuBurger.addEventListener('click', () => {
    
    const isOpen = navList.classList.toggle('menu-visible');
    menuBurger.setAttribute('aria-expanded', isOpen);
    menuBurger.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    if (isOpen) {

        menuBurger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="close-icone-burger">
        <path d="m18 15-6-6-6 6" />
        </svg>`;
        } else {
            menuBurger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="open-icone-burger">
                    <path d="m6 9 6 6 6-6" />
                </svg>`
        }
})