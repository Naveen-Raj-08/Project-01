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

$(document).ready(function () {
  $("#Product-zoom").zoom();
});

var quantity = 1;
document.getElementById("result").innerHTML = quantity;
function Increase() {
  if (quantity >= 0) {
    quantity++;
  }
  document.getElementById("result").innerHTML = quantity;
}

function Decrease() {
  if (quantity > 0) {
    quantity--;
  }
  document.getElementById("result").innerHTML = quantity;
}

$(document).ready(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("active");
    $(".tab-content").removeClass("active");

    $(this).addClass("active");
    $("#" + tab_id).addClass("active");
  });
});

$(document).ready(function () {
  $("#related-items").owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    margin: 10,
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
});

//Adding Items to cart
var Count = 0;
document.getElementById("cartCount").innerHTML = Count;

function AddCart() {
  if (Count >= 0) {
    var Result = Count++;
  }
  var Total = Result + quantity;
  document.getElementById("cartCount").innerHTML = Total;
}
