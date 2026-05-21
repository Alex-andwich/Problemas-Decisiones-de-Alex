function calcular() {
  let money = Number(document.getElementById("money").value);

  let priceKm = Number(document.getElementById("priceKm").value);

  let mexico = 750 * 2 * priceKm;
  let pv = 800 * 2 * priceKm;
  let acapulco = 1200 * 2 * priceKm;
  let cancun = 1800 * 2 * priceKm;

  let result = "";

  if (money >= cancun) {
    result = "Puede ir a Cancún";
  } else if (money >= acapulco) {
    result = "Puede ir a Acapulco";
  } else if (money >= pv) {
    result = "Puede ir a Puerto Vallarta";
  } else if (money >= mexico) {
    result = "Puede ir a México";
  } else {
    result = "Debe quedarse en casa";
  }

  document.getElementById("resultado").innerHTML = result;
}
