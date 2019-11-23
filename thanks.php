<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Logo</title>
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/slick.css">
  <link rel="stylesheet" href="css/animate.css">
</head>
<body>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-block">
        <div class="navbar__logo">
          <img src="img/logo.png" alt="logo">
          <span>LOGO</span>
        </div>
        <!-- /.navbar__logo -->
        <!-- Главное меню -->
        <div class="navbar__menu">
          <ul class="navbar-menu" id="menu">
            <li class="navbar-menu__items">
              <a href="#metka-1"><span class="navbar-menu__item">Услуги</span></a>
              <img src="img/navbar/vertical-line.png" class="navbar-menu__line" alt="vertical-line">
            </li>
            <li class="navbar-menu__items">
              <a href="#metka-1"><span class="navbar-menu__item">Цены</span></a>
              <img src="img/navbar/vertical-line.png" class="navbar-menu__line" alt="vertical-line">
            </li>
            <li class="navbar-menu__items">
              <a href="#metka-3"><span class="navbar-menu__item">Отзывы</span></a>
              <img src="img/navbar/vertical-line.png" class="navbar-menu__line" alt="vertical-line">
            </li>
            <li class="navbar-menu__items">
              <a href="#metka-4"><span class="navbar-menu__item">Новости</span></a>
              <img src="img/navbar/vertical-line.png" class="navbar-menu__line" alt="vertical-line">
            </li>
            <li class="navbar-menu__items">
              <a href="#metka-5"><span class="navbar-menu__item">Контакты</span></a>
            </li>
          </ul>
        </div>
        <!-- /.navbar__menu -->
        <div class="navbar__info">
          <span class="navbar__contacts">
            <a href="tel:+7(863)342-22-21" class="navbar__phone">+7 (863) <span class="navbar__phone-bold">342-22-21</span></a>
          </span>
          <button class="button navbar__button" id="button">Заказать звонок</button>
        </div>
        <!-- /.navbar__info -->
        <!-- Начало меню Гамбургера -->
        <div class="mobile-menu">
          <a href="" class="mobile-menu__btn">
            <span class="mobile-menu__close"></span>
          </a>
        </div>
        <!-- Конец меню Гамбургера -->
      </div>
      <!-- /.navbar-block -->
    </div>
    <!-- /.container -->
  </nav>
  <!-- /.navbar -->

  <!-- Модальное окно навбара -->
  <div class="modal" id="modal">
    <div class="modal-dialog">
      <button class="button modal__close" id="close">&times;</button>
      <div class="modal-block">
        <h1 class="modal__title">ОСТАВЬТЕ <span class="modal__title-color">ЗАЯВКУ</span></h1>
        <form action="mail.php" method="POST" class="form modal__form" id="navbar-form">
          <div class="input-group">
            <input type="text" name="username" class="input modal__input" placeholder="Ваше имя">
          </div>
          <div class="input-group">
            <input type="tel" name="phone" class="input modal__input phone" placeholder="Ваш номер телефона">
          </div>
          <button class="button modal__button">ЗАКАЗАТЬ ЗВОНОК</button>
        </form>
      </div>
    </div>
  </div>
  <!-- Конец модального окна навбара -->

  <section class="hero">
    <div class="slider">
      <div class="slider__shadow">
        <div class="slider__item">
          <img src="img/hero/slider-1.jpg" class="slider__background" alt="background-hero">
        </div>
      </div>
      <div class="slider__shadow"> 
        <div class="slider__item">
          <img src="img/hero/slider-2.jpg" class="slider__background" alt="background-hero">
        </div>
      </div> 
      <div class="slider__shadow"> 
        <div class="slider__item">
          <img src="img/hero/slider-3.jpg" class="slider__background" alt="background-hero">
        </div>
      </div>
      <div class="slider__shadow"> 
        <div class="slider__item">
          <img src="img/hero/slider-4.jpg" class="slider__background" alt="background-hero">
        </div>
      </div>
    </div>
    <!-- /.slider -->

    <div class="container">
        <div class="hero-block">
          <div class="hero__title">Спасибо за заявку
          </div>
          <!-- /.hero__title -->
          <div class="hero__subtitle" style="margin-bottom: 50px;">Мы перезвоним Вам через 15 минут</div>
          <!-- /.hero__subtitle -->
          <a href="index.php"><button class="button hero__button" id="button">Вернуться</button></a>
          <!-- /.button hero__button -->
          <!-- /.hero__text -->
        </div>
        <!-- /.hero-block -->
      </div>

  </section>
  <!-- /.hero -->


  <footer class="footer">
    <div class="container">
      <div class="footer-block">
        <div class="footer__address">
          <img src="img/footer/placeholder.png" alt="placeholder">
          <a name="metka-5" href="https://goo.gl/maps/UCDhykco44Zm4Qru5"><span>г. Москва, ул. Советская 48 корп. 3</span></a>
        </div>
        <!-- /.footer__address -->
        <div class="footer_social-network">
          <a href="https://www.instagram.com/"><img src="img/footer/instagram.png" alt="instagram"></a>
          <a href="https://vk.com/"><img src="img/footer/vk.png" alt="vk"></a>
          <a href="https://ok.ru/"><img src="img/footer/odnoklassniki.png" alt="odnoklassniki"></a>
        </div>
        <!-- /.footer_social-network -->
        <div class="footer__info">
          <div class="footer__info-mail">
            <img src="img/footer/close-envelope.png" alt="mail">
            <a href="infosanteh@gmail.com">infosanteh@gmail.com</a>
          </div>
          <div class="footer__line"><img src="img/footer/line.png" alt="line"></div>
          <!-- /.footer__info-mail -->
          <div class="footer__info-tel">
            <img src="img/footer/phone-receiver.png" alt="phone">
            <a href="+7(863)342-22-21">+7 (863) <span class=footer__info-bold>342-22-21</span></a>
          </div>
          <!-- /.footer__info-tel -->
        </div>
        <!-- /.footer__info -->
      </div>
      <!-- /.footer-block -->
    </div>
    <!-- /.container -->
  </footer>
  <!-- /.footer -->

  <div class="modal-php">
    <h1 class="modal-php__title">Благодарим Вас за заявку!</h1>
    <p class="modal-php__text">Мы свяжемся с Вами в течение 15 минут</p>          
  </div>

  <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script src="js/slick.min.js"></script>
  <script src="js/main.js"></script>
  <script src="js/jquery.validate.min.js"></script>
  <script src="js/wow.min.js"></script>
  <script src="js/jquery.maskedinput.min.js"></script>
</body>
</html>