// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters

// A sintaxe de rest parameter (parâmetros rest)  nos permite representar um número indefinido
// de argumentos como um array.

// Crie uma função que some todos os parâmetros passados a ela.

const assert = require("assert");

const sumAll = (...values) => {
  // let sum = 0;
  // for (let index = 0; index < values.length; index += 1) {
  //   sum += values[index];
  // }
  // return sum;

  return values.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

console.log(sumAll(12, 7, 8, 9, 1, 0, 98, 12, 4));
assert.strictEqual(sumAll(1, 2), 3);
assert.strictEqual(sumAll(1, 2, 3), 6);
assert.strictEqual(sumAll(1, 2, 3, 4, 5, 1), 15);
