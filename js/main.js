$(document).ready(function() {
  /* Слайдер главного блока */
  $('.slider').slick({
    dots:true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false
  });
  /* меню гамбургер */
  $('.mobile-menu').on('click', function(e) {
    e.preventDefault();
    $('.mobile-menu__btn').toggleClass('mobile-menu__active'),
    $('.navbar__menu').toggleClass('navbar__menu-active'),
    $(".hero").toggleClass('hero-active')
  });
  /* Слайдер блока отзывы */
  $('.feedback-slider').slick({
    dots:true,
    infinite:true,
    speed:300,
    slidesToShow:2,
    slidesToScroll:2,
    adaptiveHeight:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});