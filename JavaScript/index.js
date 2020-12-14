$(document).ready(function () {
  $("#carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 5,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

$("#banner").owlCarousel({
  items: 1,
  loop: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 1500,
  autoplayTimeout: 7000,
  slideTransition: "linear",
});

$("#product-brands").owlCarousel({
  items: 5,
  loop: false,
  margin: 10,
  dotsEach: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
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

//Background Particles
$("#tsparticles")
  .particles()
  .init(
    {
      background: {
        color: {
          value: "#202020",
        },
      },
      fpsLimit: 120,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },

          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 10,
            opacity: 0.3,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 200,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 1,
        },
      },
      detectRetina: true,
    },
    function (container) {}
  );

function nextPage() {
  window.location.replace("./Product_view.html");
}

function ProductPage() {
  window.location.replace("./Product_list.html");
}
