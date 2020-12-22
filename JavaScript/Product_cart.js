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
