$(document).ready(function () {
  $("#carousel").owlCarousel({
    loop: true,
    center: true,
    margin: 10,
    items: 5,
    center: true,
    autoplay: true,
    autoplayTimeout: 5500,
    dots: false,
  });
});

// Scroll Animation

jQuery(function ($) {
  var doAnimations = function () {
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $(".animatable");
    if ($animatables.length == 0) {
      $(window).off("scroll", doAnimations);
    }

    $animatables.each(function (i) {
      var $animatable = $(this);
      if ($animatable.offset().top + $animatable.height() - 20 < offset) {
        $animatable.removeClass("animatable").addClass("animated");
      }
    });
  };
  $(window).on("scroll", doAnimations);
  $(window).trigger("scroll");
});

// Google Map
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712776, -74.005974),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
