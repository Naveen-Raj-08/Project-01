var quantity = 1;
var price = 69;
var totalPrice = "";
var ShippingCost = 3;

//Dom first Rendering
document.getElementById("result").innerHTML = quantity;
document.getElementById("price").innerHTML = price;
document.getElementById("totalPrice").innerHTML = price + ShippingCost;
document.getElementById("productPrice").innerHTML = price;
document.getElementById("shipping").innerHTML = ShippingCost;
document.getElementById("quantity").innerHTML = quantity;

//Increasing the Product quantity and cost with shipping charge
function Increase() {
  if (quantity >= 0) {
    quantity++;
    totalPrice = price * quantity + ShippingCost;
    if (price > 99) {
      ShippingCost = 0;
    }
  }
  document.getElementById("result").innerHTML = quantity;
  document.getElementById("price").innerHTML = totalPrice;
  document.getElementById("totalPrice").innerHTML = totalPrice;

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
  document.getElementById("result").innerHTML = quantity;
  document.getElementById("price").innerHTML = totalPrice;
  document.getElementById("totalPrice").innerHTML = totalPrice;
  document.getElementById("quantity").innerHTML = quantity;
}
