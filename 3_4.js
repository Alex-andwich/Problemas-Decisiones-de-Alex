function calcular() {
  let hours = Number(document.getElementById("hours").value);
  let total = 0;
  if (hours <= 2) {
    total = hours * 5;
  } else if (hours <= 5) {
    total = 2 * 5 + (hours - 2) * 4;
  } else if (hours <= 10) {
    total = 2 * 5 + 3 * 4 + (hours - 5) * 3;
  } else {
    total = 2 * 5 + 3 * 4 + 5 * 3 + (hours - 10) * 2;
  }

  document.getElementById("resultado").innerHTML = "Total a pagar: $" + total;
}
