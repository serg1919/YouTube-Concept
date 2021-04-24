$(function(){
  $('.channel__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,

    prevArrow: '<button type="button" class="arrow prev"></button>',
    nextArrow: '<button type="button" class="arrow next"></button>',

      responsive: [
      {
        breakpoint: 1801,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1501,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]

  });


  $('.r__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,

    prevArrow: '<button type="button" class="r-arrow r-prev"></button>',
    nextArrow: '<button type="button" class="r-arrow r-next"></button>',

    responsive: [
      {
        breakpoint: 1501,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      },

    ]

  });


  $('.food__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,

    prevArrow: '<button type="button" class="f-arrow f-prev"></button>',
    nextArrow: '<button type="button" class="f-arrow f-next"></button>',

    responsive: [
      {
        breakpoint: 1801,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1501,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]

  });

});
