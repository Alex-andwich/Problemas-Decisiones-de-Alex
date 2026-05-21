function calcular() {
  let plan = document.getElementById("plan").value;

  let age = Number(document.getElementById("age").value);

  let alcohol = document.getElementById("alcohol").checked;
  let glasses = document.getElementById("glasses").checked;
  let disease = document.getElementById("disease").checked;

  let basePrice = 0;
  let extra = 0;

  /* PRECIO BASE */

  if (plan == "A" || plan == "a") {
    basePrice = 1200;
  } else {
    basePrice = 950;
  }

  /* CARGOS EXTRA */

  if (alcohol) {
    extra += basePrice * 0.1;
  }

  if (glasses) {
    extra += basePrice * 0.05;
  }

  if (disease) {
    extra += basePrice * 0.05;
  }

  if (age > 40) {
    extra += basePrice * 0.2;
  } else {
    extra += basePrice * 0.1;
  }

  let finalPrice = basePrice + extra;

  document.getElementById("resultado").innerHTML =
    "El costo total de la póliza es $" + finalPrice;
}
