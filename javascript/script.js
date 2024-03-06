"use strict"

let total = 0;

function addToCart(price, operation) { // gets value price, and operations used//
  if (operation === 'plus') {
    total += price;
  } else if (operation === 'minus' && total - price >= 0) {
    total -= price;
  }
  document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2); //result = two deciaml points//
}


