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