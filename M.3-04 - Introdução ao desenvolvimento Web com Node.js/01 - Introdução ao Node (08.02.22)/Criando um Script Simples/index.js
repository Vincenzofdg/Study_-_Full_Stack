// Antes de importar o readline- sync

// index.js
// console.log('Hello, world!');


const readline = require('readline-sync'); // importando o readline-sync

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Hello, ${name}! You are ${age} years old!`);

