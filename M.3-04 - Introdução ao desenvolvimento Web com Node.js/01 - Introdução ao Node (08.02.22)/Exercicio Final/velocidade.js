const { question } = require('readline-sync');

const calc = (distancia, tempo) => distancia / tempo;

const distancia = question('Qual a distância do trajeto? (metros) ');
const tempo = question('Duração do trajeto? (segundos) ');

const resultado = calc(distancia, tempo);

console.log(`valocidade de ${resultado} m/s`);

