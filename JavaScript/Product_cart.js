var quantity = 1;
var price = 69;
var totalPrice = 0;
var ShippingCost = 3;

//Dom first Rendering
document.getElementById("result").innerHTML = quantity;
document.getElementById("price").innerHTML = price;
document.getElementById("totalPrice").innerHTML =
  price * quantity + ShippingCost;
document.getElementById("productPrice").innerHTML = price;
document.getElementById("shipping").innerHTML = ShippingCost;
document.getElementById("quantity").innerHTML = quantity;

//Increasing the Product quantity and cost with shipping charge
function Increase() {
  if (quantity >= 0) {
    quantity++;
    totalPrice = price * quantity;
  }
  totalPrice < 99
    ? (document.getElementById("totalPrice").innerHTML =
        totalPrice + ShippingCost)
    : (document.getElementById("totalPrice").innerHTML = totalPrice);

  document.getElementById("result").innerHTML = quantity;
  document.getElementById("quantity").innerHTML = quantity;
}

//decreasing the Product quantity and cost with shipping charge
function Decrease() {
  if (quantity > 0) {
    quantity--;
    if (quantity === 0) {
      totalPrice = 0;
    }
    totalPrice = price * quantity;
  }
  totalPrice < 99
    ? (document.getElementById("totalPrice").innerHTML =
        totalPrice + ShippingCost)
    : (document.getElementById("totalPrice").innerHTML = totalPrice);
  document.getElementById("result").innerHTML = quantity;
  document.getElementById("quantity").innerHTML = quantity;
}

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
