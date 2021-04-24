
const menuBtn = document.querySelector('.menu-btn');
const smallMenu = document.querySelector('.small');
const navboxSide = document.querySelector('.navbox--side');
const navBtn = document.querySelector('.navigation__btn');
const navListClose = document.querySelector('.navigation__list-close');
const navBtnText = document.querySelector('.navigation__text');

menuBtn.addEventListener('click', function () {

  smallMenu.classList.toggle('small--active');
  navboxSide.classList.toggle('navbox--side--active');

});

navBtn.addEventListener('click', function () {

  navListClose.classList.toggle('navigation__list-close--active');
  navBtn.classList.toggle('navigation__btn--active');
  if (navBtnText.textContent == 'Развернуть') {
    navBtnText.textContent = 'Свернуть';
  } else {
    navBtnText.textContent = 'Развернуть';
  }

});
