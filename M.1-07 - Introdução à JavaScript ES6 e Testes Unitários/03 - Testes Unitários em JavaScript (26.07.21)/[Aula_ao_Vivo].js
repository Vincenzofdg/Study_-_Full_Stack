// Implemente uma função summationOf(number) que recebe um número inteiro e retorna o seu somatório.
// Por exemplo:
// summationOf(1) saída esperada 1: de 1 até 1 = 1
// summationOf(3) saída esperada 6: de 1 até 3 = 1 + 2 + 3 = 6
// summationOf(5) saída esperada 15: de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15

const assert = require("assert");

const summationOf = (number) => {
    if(typeof(number) !== 'number'){
        throw Error('Essa função só aceita um numero como parametro!');
    }
    if(number === 0){
        throw Error('O numero ZERO nao pode ser passado como parametro para essa funçao!')
    }
  let summation = 0;
  for (let index = 1; index <= number; index += 1) {
    summation = summation + index;
  }
  return summation;
};

// console.log(typeof(summationOf));

// typeOf(summation(1)) === 'function'

assert.strictEqual(typeof summationOf, "function", "Valores sao diferentes!!");
assert.strictEqual(summationOf(1), 1);
assert.strictEqual(summationOf(3), 6);
assert.strictEqual(summationOf(5), 15);
assert.strictEqual(summationOf(13), 91);
assert.strictEqual(summationOf(0), 91);
assert.strictEqual(summationOf('13'), 91);
