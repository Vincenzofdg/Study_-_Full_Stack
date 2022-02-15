/* 01 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
Produza o mesmo resultado abaixo, porém utilizando array destructuring*/
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [primeira] = saudacoes;
console.log(primeira)

/* 02 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays,
corrija os valores das variáveis. Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes
ao seu verdadeiro tipo*/
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água
