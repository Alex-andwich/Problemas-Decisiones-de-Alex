function calcular() {
  let money = Number(document.getElementById("money").value);

  let gift = "";

  if (money <= 10) {
    gift = "Puedes comprar una tarjeta";
  } else if (money <= 100) {
    gift = "Puedes comprar chocolates";
  } else if (money <= 250) {
    gift = "Puedes comprar flores";
  } else {
    gift = "Puedes comprar un anillo";
  }

  document.getElementById("resultado").innerHTML = gift;
}
