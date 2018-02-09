var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.page-header__btn');
var headerNojs = document.querySelector('.page-header--nojs');

if(headerNojs) {
  headerNojs.classList.remove('page-header--nojs');
}

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

function validateForm(form) {
  for (var i=0; i<form.elements.length; i++) {
    var element = form.elements[i];

    element.classList.remove('form-page__input-text--error');

    if (element.required && !element.value) {
      element.classList.add('form-page__input-text--error');
    }
  }
}
