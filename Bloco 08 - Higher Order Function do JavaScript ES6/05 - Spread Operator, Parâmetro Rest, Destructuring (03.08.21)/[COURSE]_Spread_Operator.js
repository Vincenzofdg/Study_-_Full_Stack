/* Reumo:
  - Inluído no ES6;
  - Espalha os valores de arrays e objetos;
  - Ajuda a promover imutabilidade no código.
*/

// Video Aula:
  // Com arrays
const carros = ['Gol', 'HB20', 'Focus'];
const motos = ['Biz', 'R1'];

const veiculos = ['F40', ...carros, 'Uno', ...motos]; // [...array1, ...array2]

console.log(veiculos);

  // Com objetos:
const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalhos: true,
}

const pessoa = {
  nome: 'Vincenzo',
  idade: '25',
  cidade: 'Santos',
}

const pessoaTryber = {
  ...pessoa,
  ...conhecimentosTrybe,
  esporte: 'Video Game',
}

console.log(pessoaTryber)

console.log('|-----------Exemplo 01-----------|');

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(1);
const patientInfo = [60, 1.7];
console.log(imc(...patientInfo));


console.log('|-----------Exemplo 02-----------|');

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers));

console.log('|-----------Exemplo 03-----------|');

const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer);