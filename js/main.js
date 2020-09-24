$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    autoplay: true,
    navSpeed: 3000,
  });

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
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    userPhone: {
      required: !0,
      minlength: 16,
    },
  },
  //сообщения
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче 2 символов",
      maxlength: "Имя не длиньше 15 символов",
    },
    userPhone: {
      required: "Телефон обязателен",
      minlength: "Некорректно введен номер",
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
$("[type=tel]").mask("+7(000)000-00-00", {
  placeholder: "Ваш номер телефона:",
});