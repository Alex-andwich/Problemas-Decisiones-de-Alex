function calcular() {
  let years = Number(document.getElementById("years").value);
  let bonus = 0;

  if (years > 5) {
    bonus = 1000;
  } else {
    bonus = years * 100;
  }

  document.getElementById("resultado").innerHTML = "El bono es de $" + bonus;
}
