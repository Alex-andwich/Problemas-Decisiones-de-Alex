function calcular() {
  let hours = Number(document.getElementById("hours").value);
  let pay = Number(document.getElementById("pay").value);
  let salary = 0;
  if (hours > 50) {
    document.getElementById("resultado").innerHTML =
      "No está permitido trabajar más de 50 horas";
  } else if (hours <= 40) {
    salary = hours * pay;
    document.getElementById("resultado").innerHTML =
      "El sueldo semanal es $" + salary;
  } else if (hours <= 45) {
    let extraHours = hours - 40;
    salary = 40 * pay + extraHours * pay * 2;

    document.getElementById("resultado").innerHTML =
      "El sueldo semanal es $" + salary;
  } else {
    let doubleHours = 5;
    let tripleHours = hours - 45;
    salary = 40 * pay + doubleHours * pay * 2 + tripleHours * pay * 3;

    document.getElementById("resultado").innerHTML =
      "El sueldo semanal es $" + salary;
  }
}
