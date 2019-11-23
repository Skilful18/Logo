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
    $('.navbar__menu').toggleClass('navbar__menu-active')
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
    dotsClass: 'my-dots-class',
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
      },
      {
        breakpoint: 410,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '15px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '5px',
          slidesToShow: 1
        }
      }
    ]
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
  $("#navbar-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true
      }
    },
      errorElement: "em",
      errorClass: "navbar-invalid",
      messages: {
        username: {
          required: "Заполните поле",
          minlength: jQuery.validator.format("Введите еще {0} символов")
        },
        phone: {
          required: "Укажите телефон",
          phone: "Заполните поле"
        } 
      },
      
  });
  /* Маска для телефона */
  $(".phone").mask("+7 (999) 999-99-99");
  /* Плавный переход для якорных ссылок */
  $('a[href*="#"]').on('click.smoothscroll', function( e ){
    var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
    if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
    var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
    if( ! $target.length ) return;
    e.preventDefault();
    $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 400, 'swing', function(){
    window.location.hash = hash;
    });
    });
    /* Инициализация WOW.js */
    new WOW().init();
    /* Закрытие гамбургер меню при нажатии на пункт меню */
    $('.navbar-menu__item').on('click', function(){
      $('.navbar__menu').removeClass('navbar__menu-active'),
      $('.mobile-menu__btn').removeClass('mobile-menu__active')
    });
    $("#modal-map").validate({
      rules: {
        username: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        phone: {
          required: true
        }
      },
        errorElement: "em",
        errorClass: "map-invalid",
        messages: {
          username: {
            required: "Заполните поле",
            minlength: jQuery.validator.format("Введите еще {0} символов")
          },
          phone: {
            required: "Укажите телефон",
            phone: "Заполните поле"
          } 
        },
        
    });
});
/* Скрипт позволяющий карточкам менять текст на цену */
const items = document.querySelectorAll('.service-block__card');

[...items].forEach(item => {
  item.querySelector('.service-block__card-button').addEventListener('click', (e) => {
   item.classList.toggle('service-block__card-active');
    e.target.innerText = item.classList.contains('service-block__card-active') ? '300 руб' : 'Узнать цену';
  });
});