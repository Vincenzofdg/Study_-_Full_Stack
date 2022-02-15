/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const assert = require("assert");
const numbers = require("./numbers");

// Usando ASSERT
// Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
// assert.ok(numbers([1, 2, 3, 4, 5]));
// assert.strictEqual(numbers([1, 2, 3, 4, 5]),true);

// Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
assert.strictEqual(numbers([1, 2, "3", 4, 5]), false);

// Escreva um teste em que a função recebe [1, 'a', 3] e retorna false

// Escreva um teste em que a função recebe [' '] e retorna false

//-------------------------------------------------------------------------------

//Usando JEST
describe("Validar vetor de numeros", () => {
  // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
  test("Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true", () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });

  // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
  test("Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false", () => {
    expect(numbers([1, 2, "3", 4, 5])).toBeFalsy();
  });
});

// Escreva um teste em que a função recebe [1, 'a', 3] e retorna false

// Escreva um teste em que a função recebe [' '] e retorna false
