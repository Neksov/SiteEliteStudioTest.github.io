$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
  });
});
document.addEventListener(
  "DOMContentLoaded", () => {
    new Mmenu("#my-menu", {
      "extensions": [
        "pagedim-black"
      ]
    });
  }
);