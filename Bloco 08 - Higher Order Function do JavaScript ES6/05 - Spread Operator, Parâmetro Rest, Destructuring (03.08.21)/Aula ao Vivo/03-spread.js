// Transforme o conteúdo de um array em argumentos da função! Com e sem spread operators.

const assert = require("assert");

const point = [1.0, 2.2, -6.6];

const otherPoint = [0.1, 3.5, -99.6];

printPointCoordinates = (x, y, z) =>
  `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;

assert.strictEqual(
  printPointCoordinates(...point),
  "Point coordinates are x = 1, y = 2.2 and z = -6.6"
);

assert.strictEqual(
  printPointCoordinates(...otherPoint),
  "Point coordinates are x = 0.1, y = 3.5 and z = -99.6"
);
