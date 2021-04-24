
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


// function makePhrases() {
//   var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
//   var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
//   var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
//   var rand1 = Math.floor(Math.random() * words1.length);
//   var rand2 = Math.floor(Math.random() * words2.length);
//   var rand3 = Math.floor(Math.random() * words3.length);
//   var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
//   console.log(phrase);
// }
// makePhrases();

