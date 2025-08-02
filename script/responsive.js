const menu = document.querySelector('.nav-list');
const burger = document.querySelector('.nav-burger');
const linkNumber = document.querySelectorAll('.number');


burger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    linkNumber.forEach(lien => {
        lien.innerHTML = "";
    });
});

