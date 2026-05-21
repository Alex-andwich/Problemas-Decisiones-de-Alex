function calcular() {
  let students = Number(document.getElementById("students").value);

  let price = 0;
  let total = 0;

  if (students > 100) {
    price = 20;
  } else if (students >= 50) {
    price = 35;
  } else if (students >= 20) {
    price = 40;
  } else {
    price = 70;
  }

  total = students * price;

  document.getElementById("resultado").innerHTML =
    "Cada alumno pagará $" + price + "<br>El costo total es $" + total;
}
