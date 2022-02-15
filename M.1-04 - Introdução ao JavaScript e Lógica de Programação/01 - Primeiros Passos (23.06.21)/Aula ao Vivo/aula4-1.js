let num1 = 5;
let num2 = 10;
let num3 = 15;


let nome = 'Turma 14';

let verdadeiro = true;

let idadeMinimaParaDirigir = 18;

// Soma
let soma = num1 + num2;

// Subtração
let subtracao = num1 - num2;

// Divisão
let divisao = num1 / num2;

let restoDaDivisao = num1 % 5;
console.log(restoDaDivisao);

// Multiplicação
let multiplicacao = num1 * num2; 

// Comparação
let comparacao = num1 > num2;

console.log(1 <= 0);

// Condicional
if(2 === 12){
    console.log('OK');
}

if(num1 > num2) {
    console.log("num1 wins");
} else if(num1 < 10 && num1 > 5){
    console.log("num2 wins");
} else {
    console.log('Não');
}

// Como saber se o num1 + num2 é par?
// Utilizamos o sinal de % (MOD)
console.log(13 % 5);

let isEven = ((num1 + num2) % 2 ) == 0;

console.log(isEven);


let valor1 = 10;
let valor2 = '10';

if (valor1 === valor2) {
  console.log('Valor é igual');
} else {
  console.log('Valor diferente');
}

if(2 > 2 || 2 < 1){
    console.log("passou!!");
}else{
    console.log("não passou!!");
}


// E o num1 + num2 + num3?
isEven = ((num1 + num2 + num3) % 2 ) == 0;

console.log(isEven);


// Switch

let weekDay = 4;

switch(weekDay) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda-feira")
        break;
    case 3:
        console.log("Terça-feira")
        break;
    case 4:
        console.log("Quarta-feira")
        break;
    case 5:
        console.log("Quinta-feira")
        break;
    case 6:
        console.log("Sextou!")
        break;
    case 7:
        console.log("Sábado")
        break;
    default:
        console.log("Não existe esse dia, ainda :)")
};

let age = 40;

if(age >= 18){
    console.log('Habilitado!!');
}else{
    console.log('Nao habilitado!!');
}