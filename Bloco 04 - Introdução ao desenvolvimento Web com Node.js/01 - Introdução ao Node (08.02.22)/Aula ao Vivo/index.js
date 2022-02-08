const readline = require('readline-sync');	// Modulo de terceiro (npm i readline-sync)
const { imc } = require('./imc'); 		// modulo local
const fs = require('fs').promises;			// 

// IMC = Peso / (Altura * altura)
// Nome (string)
// Altura (float)
// Peso (float)

const askNome = () => readline.question('Qual o seu nome? ');
const askAltura = () => readline.questionFloat('Qual é sua altura? ');
const askPeso = () => readline.questionFloat('Qual é o seu peso? ');

async function main () {
    const nome = askNome();
    const peso = askPeso();
    const altura = askAltura();
    const resultado = imc(peso, altura);
    console.log(`O IMC de ${nome} é: ${resultado}`);
    await fs.appendFile('imc.txt', `O IMC de ${nome} é: ${resultado}\n`);
    // Sem promises
    // fs.appendFileSync('imc.txt', `O IMC de ${nome} é: ${resultado}\n`);
};

main();
