function calcular() {
  let price = Number(document.getElementById("price").value);

  let discount = 0;
  let finalPrice = 0;

  if (price >= 200) {
    discount = price * 0.15;
  } else if (price > 100 && price < 200) {
    discount = price * 0.12;
  } else {
    discount = price * 0.1;
  }

  finalPrice = price - discount;

  document.getElementById("resultado").innerHTML =
    "El descuento es de $" + discount + "<br>El precio final es $" + finalPrice;
}
