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
