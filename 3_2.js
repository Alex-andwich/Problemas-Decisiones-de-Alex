function calcular() {
  let hours = Number(document.getElementById("hours").value);
  let pay = Number(document.getElementById("pay").value);

  let salary = 0;

  if (hours <= 40) {
    salary = hours * pay;
  } else {
    let extraHours = hours - 40;

    salary = 40 * pay + extraHours * pay * 2;
  }

  document.getElementById("resultado").innerHTML =
    "El sueldo semanal es: $" + salary;
}
