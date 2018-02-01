var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.page-header__btn');

    // navMain.classList.remove('main-nav--nojs');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        navToggle.classList.add('menu-opened');

      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        navToggle.classList.remove('menu-opened');
      }
    });
  