// Exemplo 01: Calcular se o estudante esta aprovado ou reprovado:
const students = [
  {name: 'Maria', grade: 70, approved: ''},
  {name: 'José', grade: 56, approved: ''},
  {name: 'Roberto', grade: 90, approved: ''},
  {name: 'Ana', grade: 81, approved: ''},
];

  // Usando o For:
function verifyGrades() {
  for (let i = 0; i < students.length; i += 1) {
    const student = students[i];
    if (student.grade >= 60) {
      student.approved = 'Aprovado';
    } else {
      student.approved = 'Recuperação';
    }
  }
}
verifyGrades();
console.log(students);


  // Usando HOFS:
function verifyGrades() {
  return students.forEach((student) => (student.grade >= 60) ? (student.approved = 'Aprovado') : (student.approved = 'Reprovado'))
}
verifyGrades()
console.log(students);

// Exemplo 02: Mostrar o primeiro divisor de 5:
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

  // Usando For:
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}
console.log(firstMultipleOf5);

  // Usando HOFS:
const multipleof5 = numbers.find((number) => number % 5 == 0);
console.log(multipleof5)