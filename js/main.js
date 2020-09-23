$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
  });

  $('#my-menu').mmenu({
    extensions: ['widescreen', ],
    navbar: {
      title: 'Основное меню сайта '
    }
  });

  var api = $('#my-menu').data('mmenu');
  api.bind('opened', function () {
    $('hamburger').addClass('is-active');
  }).bind('closed', function () {
    $('hamburger').removeClass('is-active');
  });
});