function calcular() {
  let salary = Number(document.getElementById("salary").value);
  let years = Number(document.getElementById("years").value);

  let seniorityBonus = 0;
  let salaryBonus = 0;
  let finalBonus = 0;

  if (years > 2 && years < 5) {
    seniorityBonus = salary * 0.2;
  } else if (years >= 5) {
    seniorityBonus = salary * 0.3;
  }

  if (salary < 1000) {
    salaryBonus = salary * 0.25;
  } else if (salary <= 3500) {
    salaryBonus = salary * 0.15;
  } else {
    salaryBonus = salary * 0.1;
  }

  if (seniorityBonus > salaryBonus) {
    finalBonus = seniorityBonus;
  } else {
    finalBonus = salaryBonus;
  }

  document.getElementById("resultado").innerHTML =
    "El bono asignado es de $" + finalBonus;
}
