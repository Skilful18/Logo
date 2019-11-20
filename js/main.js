$(document).ready(function() {
  /* Слайдер главного блока */
  $('.slider').slick({
    dots:true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
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
  /* Модальные окна */
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');

  button.on('click', function() {
    modal.addClass('modal_active');
  });
  close.on('click', function() {
    modal.removeClass('modal_active');
  });
});