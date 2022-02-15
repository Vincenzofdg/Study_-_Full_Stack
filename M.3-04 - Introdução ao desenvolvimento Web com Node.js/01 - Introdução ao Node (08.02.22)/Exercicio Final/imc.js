const { questionFloat } = require('readline-sync');

const imc = (peso, altura) => (peso / Math.pow(altura, 2)).toFixed(2);

const peso = questionFloat('Quanto você pesa? ');
const altura = questionFloat('Qual é a sua altura? ');

const imcValue = imc(peso, altura);

const resposta = (param) => {
    console.log(`IMC: ${param}`)
    if (param <= 18.5) console.log('Situação: Abaixo do peso (magreza)');
    else if (param >= 18.5 && param < 25) console.log('Situação: Peso normal');
    else if (param >= 25 && param < 30) console.log('Situação: Acima do peso (sobrepeso)');
    else if (param >= 30 && param < 35) console.log('Situação: Obesidade grau I');
    else if (param >= 35 && param < 40) console.log('Situação: Obesidade grau II');
    else console.log('Situação: Obesidade graus III e IV');
}

resposta(imcValue);

