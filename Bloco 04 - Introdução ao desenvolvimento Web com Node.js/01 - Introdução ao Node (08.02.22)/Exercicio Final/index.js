const { questionInt } = require('readline-sync');

// Scripts realizados anteriormente.
const scripts = [
  {
    name: 'Calcular IMC',
    script: './imc.js'
  },
  {
    name: 'Calcular velocidade média',
    script: './velocidade.js'
  },
  {
    name: 'Jogo de adivinhação',
    script: './sorteio.js'
  },
  {
    name: 'Calcular Fatorial',
    script: './fatorial.js'
  },
  {
    name: 'Calculo de Fibonacci',
    script: './fibonacci.js'
  },
];

console.log('Bem-vindo ao menu de aplicações do bloco de Introdução ao node\nEscolha a aplicação que deseja rodar.\n');

const scriptsList = scripts.map((script, index) => console.log(`${++index} - ${script.name}`));

const choose = questionInt('\nEscolha o número da aplicação: ') - 1;

const selectedScript = scripts[choose];

!selectedScript ? console.log('Resposta Invalida') : require(selectedScript.script);
