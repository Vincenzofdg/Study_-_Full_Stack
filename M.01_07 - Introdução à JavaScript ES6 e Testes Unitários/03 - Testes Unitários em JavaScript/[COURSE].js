/* Links:
- https://github.com/atinfo/awesome-test-automation
- https://nodejs.org/api/assert.html
- https://nelsonic.gitbooks.io/node-js-by-example/content/core/assert/README.html
*/

// O módulo Assert é uma ferramenta de aferição que permite testar expressões.

const assert = require('assert'); // Sintaxe para incluir o módulo assert

// Exemplo 01:
assert.strictEqual(50, 50); // Sem erros: 50 == 50
assert.strictEqual(50, 70); // AssertionError: 50 == 70

// Exemplo 02:
const assert = require('assert');

function division(x, y) {
  return x / y;
}
const expected = division(10, 2);
assert.strictEqual(expected, 5, 'MENSAGEM DE ERRO CASO O EXPECTED NAO SEJA IGUAL A 3');

/*
Alguns outros métodos do módulo assert que nos permite escrever testes são: 
  * assert.strictEqual()
  * assert.deepStrictEqual()
  * assert.notStrictEqual()
  * assert.ok()
  * assert.fail()
*/

// Exemplo 03: mais de um assert
const assert = require('assert');

const add = (a, b) => a + b;

const expected = add(1, 2);

assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)

// Exemplo 04:
const assert = require('assert');

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];
assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };
assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

const person3 = { name: 'john', age: 19 };
assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');


// Testes unitários e a melhoria no código

const assert = require('assert');

function division(x, y) {
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.strictEqual(division(10, 0), 0); // 💣

// THROW (EXCEÇÃO)
// links: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw
//        https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error

const assert = require('assert');

function division(x, y) {
  // Queremos que o código retorne um erro com uma mensagem específica
  // caso o parâmetro y seja 0. Por isso lançamos uma exceção se essa condição
  // for verdadeira, o que irá interromper a execução da função.
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK

// TDD: Test Driven Development
const assert = require('assert');
const myFunction = () => {};

assert.strictEqual(typeof myFunction, 'function');
