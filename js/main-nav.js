

(function () {
    
    var mainNav = document.querySelector('.main-nav'),
        mainNavOpen = document.querySelector('.main-nav__menu-icon.main-nav__menu-icon--open'),
        mainNavClose = document.querySelector('.main-nav__menu-icon.main-nav__menu-icon--close');
    if(!mainNav) {
        mainNav.classList.remove('main-nav--open');
    }
    mainNavOpen.addEventListener('click', function () {
        mainNav.classList.add('main-nav--open');
    });

    mainNavClose.addEventListener('click', function () {
        mainNav.classList.remove('main-nav--open');
    });

})();