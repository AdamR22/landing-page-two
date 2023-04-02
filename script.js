const btnOpenMenu = document.getElementById('open-side-nav');
const btnCloseMenu = document.getElementById('close-side-nav');
const mobileNav = document.querySelector('.mobile-nav-menu');


btnOpenMenu.addEventListener('click', function() {
    mobileNav.classList.add('active');
});

btnCloseMenu.addEventListener('click', function() {
    mobileNav.classList.remove('active');
});