// Uma linguaguem é dita ter First-Class Functions quando trata suas funções como first class citizens (isto é, cidadãos de primeira classe), ou seja, elas suportam as mesmas operações que estão disponíveis para os outros tipos.

// Exemplo:

function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;
console.log(sumVariable);

// ou ...

const sum = (number1, number2) => {
  return number1 + number2;
};


// Passar funções como argumento para outras funções:
const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
    console.log(callback());
}
printGreeting(sayHello);


// Retornar uma função de outra função:
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));