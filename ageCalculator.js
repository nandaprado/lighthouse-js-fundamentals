
function ageCalculator (name, yearOfBirth, currentYear){
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Nanda", 1984, 2021));
console.log(ageCalculator("Felipe", 1985, 2021));
console.log(ageCalculator("Pedro", 2000, 2021));

