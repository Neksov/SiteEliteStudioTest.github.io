$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
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