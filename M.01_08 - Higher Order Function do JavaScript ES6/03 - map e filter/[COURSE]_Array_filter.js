/* Anotações:
Objeto do tipo array, usada para filtrar um array dada a função que se passara como parâmetro.
função filter espera que seja passada uma outra função, onde o primeiro parâmetro será o proprio elemento que esta sendo verificado.
a função filter pode receber outros dois parametros: index e o proprio array.*/


// Exemplo 01:
const numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyEven = (number) => number % 2 === 0;
const isEven = numbers.filter(verifyEven);
console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0); // arrayAnalizado.filter((parametro do array) => o que será verificado)
console.log(isEven2); // [ 30, 22 ]


// Exemplo 02:
const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople)); // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

// deixando a condicional junto:
const verificado = objPeople.filter((pessoa) => pessoa.age < 18);
console.log(verificado);


// Exemplo 03:
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]