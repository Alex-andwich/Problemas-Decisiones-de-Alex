function calcular() {
  let age = Number(document.getElementById("age").value);
  let average = Number(document.getElementById("average").value);

  let scholarship = 0;
  let message = "";

  if (age > 18) {
    if (average >= 9) {
      scholarship = 2000;
    } else if (average >= 7.5) {
      scholarship = 1000;
    } else if (average >= 6) {
      scholarship = 500;
    } else {
      message = "Se enviará una carta de invitación para estudiar más.";
    }
  } else {
    if (average >= 9) {
      scholarship = 3000;
    } else if (average >= 8) {
      scholarship = 2000;
    } else if (average >= 6) {
      scholarship = 100;
    } else {
      message = "Se enviará una carta de invitación para estudiar más.";
    }
  }

  if (scholarship > 0) {
    document.getElementById("resultado").innerHTML =
      "La beca asignada es de $" + scholarship;
  } else {
    document.getElementById("resultado").innerHTML = message;
  }
}
