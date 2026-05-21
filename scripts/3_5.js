function calcular() {
  let name1 = document.getElementById("name1").value;
  let age1 = Number(document.getElementById("age1").value);

  let name2 = document.getElementById("name2").value;
  let age2 = Number(document.getElementById("age2").value);

  let name3 = document.getElementById("name3").value;
  let age3 = Number(document.getElementById("age3").value);

  let youngestName = "";
  let youngestAge = 0;

  if (age1 <= age2 && age1 <= age3) {
    youngestName = name1;
    youngestAge = age1;
  } else if (age2 <= age1 && age2 <= age3) {
    youngestName = name2;
    youngestAge = age2;
  } else {
    youngestName = name3;
    youngestAge = age3;
  }

  document.getElementById("resultado").innerHTML =
    "La persona menor es " +
    youngestName +
    " con " +
    youngestAge +
    " años de edad";
}
