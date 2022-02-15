// Permite ordenar um array de acordo com algum critério estabelecido.

// Exemplo 01: Ordem Alfabetica:
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);

// Exemplo 02: Ordem Crescente:
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]

//Exemplo 03: Ordem Decrescente:
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]