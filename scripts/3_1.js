function calcular() {
  let edad = Number(document.getElementById("age").value);
  let resultado = document.getElementById("resultado");
  if (edad >= 18) {
    resultado.innerHTML = "Puedes votar";
  } else {
    resultado.innerHTML = "No puedes votar";
  }
}
