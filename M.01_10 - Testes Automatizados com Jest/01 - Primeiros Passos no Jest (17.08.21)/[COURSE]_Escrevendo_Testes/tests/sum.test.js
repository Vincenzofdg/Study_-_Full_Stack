const sum = require('../src/sum'); // irá importar o primeiro arquivo que tiver sum.

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});