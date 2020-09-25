$(document).ready(function () {
  //слайдер
  $('.owl-carousel').owlCarousel({
    items: 1,
    autoplay: true,
    navSpeed: 3000,
  });

  //меню
  $('#my-menu').mmenu({
    extensions: ['widescreen', ],
    navbar: {
      title: 'Основное меню сайта ',
    },
  });
  var api = $("#my-menu").data("mmenu");
  api.bind('open:finish', function () {
    $('.hamburger').addClass('is-active');
    $('.input-search').addClass('is-active');
  }).bind('close:finish', function () {
    $('.hamburger').removeClass('is-active');
    $('.input-search').removeClass('is-active');
  });


  let modal = $(".modal"); //помещаем модальное окно
  modalBtn = $("[data-toggle = modal]"); //

  closeBtn = $(".modal__close"); //
  closeBtnSend = $(".modalSend__close"); //

  modalBtn.on("click", function () {
    //присваееваем класс
    modal.toggleClass("modal--visible");
  });

  closeBtn.on("click", function () {
    //присваееваем класс
    modal.toggleClass("modal--visible");
  });
  //закрытие по esc
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".modal").removeClass("modal--visible");
    }
  });
  // закрытие по клику вне окна
  $(document).click(function (e) {
    if ($(e.target).is(".modal")) {
      modal.toggleClass("modal--visible");
    }
  });

  //открытие модального окна ПОДПИСКИ
  $(".modalSend-btn").on("click", function (event) {
    event.preventDefault();
    $(".modalSend").fadeIn();
  });
  //закрытие по esc окна ПОДПИСКИ
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".modalSend").fadeOut();
    }
  });
  // закрытие по клику вне окна  ПОДПИСКИ
  $(document).on("click", function (e) {
    $(".modalSend").fadeOut();
  });

  $(".modal__form").validate({
    errorClass: "invalid",
    rules: {
      userEmail: {
        required: true,
        email: true,
      },
      userPhone: {
        required: !0,
        minlength: 16,
      },
      userMessage: {
        required: true,
        minlength: 10,
        maxlength: 50,
      },
    },
    //сообщения
    messages: {
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: ivanov@gmail.com",
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Некорректно введен номер",
      },
      userMessage: {
        required: "Сообщение обязателено",
        minlength: "Сообщение не короче 10 символов",
        maxlength: "Сообщение не длиньше 30 символов",
      },
    },
    //отправка формы через аякс
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendModal.php",
        data: $(".modal__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
        success: function (response) {
          $(form)[0].reset(); // чистит поля после отправки формы
          modal.removeClass("modal--visible");
          $(".modal").fadeOut();
          $(".modalSend").fadeIn();
        },
      });
    },
  });

  //маска для номера телефона
  $("[type=tel]").mask("+7(000)000-00-00", {});
});