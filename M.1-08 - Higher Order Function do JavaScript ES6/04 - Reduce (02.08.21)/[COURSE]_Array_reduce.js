/* É diferente das outras HOFS.ele possui um parâmetro a mais para a função que recebe como parâmetro.
Esse parâmetro é chamado de acumulador, comumente referido como acc.*/

// Exemplo 01:
const { get } = require("http");

// Utilizando for:
const numbers = [32, 15, 3, 2, -5, 56, 10];
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!
let sumNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers);


// Utilizando .reduce:
const numbers = [32, 15, 3, 2, -5, 56, 10];
// O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
const sumNumbers = numbers.reduce((result, number) => result + number); 
console.log(sumNumbers);

// Ou seja:
const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers);

/*Analise
Usando o for:
  * Necessidade de criar uma variável para acumular o resultado de cada iteração do for, a soma de 
    cada resultado - let sumNumbers;
  * Necessidade de setar um valor inicial para variável - sumNumbers = 0. 

Usando o .reduce:
  * A função passada por parâmetro recebe dois parâmetros, o acumulador result e o elemento do array
    de cada iteração, number;
  * Como a função é uma arrow function que possui apenas uma linha, o retorno de cada interação
    será: result + number;
  * O retorno é salvo no primeiro parâmetro, result. É como se você estivesse fazendo igual à primeira
    função, sumNumbers = sumNumbers + numbers[index], mas nesse caso seria result = result + number.
*/


// Exemplo 02:
const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15


// Exemplo 03: Você pode passar um segundo parâmetro para o reduce, logo após a função.
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0" veja tambem com "10".
console.log(sumNumbers);


// Exemplo 04: ??????????
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85


// Exemplo 05: Exercicio - faça uma função que some todos os números pares do array.

// Utilizando filter e reduce:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair);
console.log(sumNumbers(numbers));

// Utilizando reduce:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152


// Exemplo 06:
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];


const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name}));

console.log(reportBetter(estudantes));