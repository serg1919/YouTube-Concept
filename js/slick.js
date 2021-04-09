$(function(){
  $('.channel__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,

    prevArrow: '<button type="button" class="arrow prev"></button>',
    nextArrow: '<button type="button" class="arrow next"></button>'
  });


  $('.r__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,

    prevArrow: '<button type="button" class="r-arrow r-prev"></button>',
    nextArrow: '<button type="button" class="r-arrow r-next"></button>'
  });


  $('.food__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,

    prevArrow: '<button type="button" class="f-arrow f-prev"></button>',
    nextArrow: '<button type="button" class="f-arrow f-next"></button>'
  });

});
