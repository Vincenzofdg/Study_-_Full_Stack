// 01 - Dada uma matriz, transforme em um array.
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(item) {
  // escreva seu código aqui
  // array.concat(): Retorna todos os arrays que foram passados como parametros
  const reducao = (acc, curr) => acc.concat(curr);
  return item.reduce(reducao, []);
}
console.log(flatten(arrays));

assert.deepStrictEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);


// Para exercicios 02 - 03 - 04
const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:



// 02 -  Crie uma string com os nomes de todas as pessoas autoras.
const expectedResult02 = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames(item) {
  // escreva seu código aqui
  const reducao = (acc, topico, index, array) => {
    if (index === array.length - 1) return acc += `${topico.author.name}.`
    return acc += `${topico.author.name}, `;
  }
  return item.reduce(reducao, 'George R. R. Martin, ');
}

//console.log(reduceNames(books))

assert.strictEqual(reduceNames(books), expectedResult02);


// 03 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult03 = 43;

function averageAge(item) {
  // escreva seu código aqui
  const livrosQuantidade = item.length;
  const reducao = item.reduce((acc, topico) => acc += (topico.releaseYear - topico.author.birthYear), 0);
  return reducao / livrosQuantidade;
}

//console.log(averageAge(books));

assert.strictEqual(averageAge(books), expectedResult03);


// 04 - Encontre o livro com o maior nome.
const expectedResult04 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook(item) {
  // escreva seu código aqui
  const reducao = (acc, topico) => {
    const num = topico.longestNamedBook.split('').length;
    console.log(num);
    // if (num >= acc) acc = num;
  }
  return reducao;
  // return item.reduce(reducao, 0);
}

//console.log(longestNamedBook(books));

//assert.deepStrictEqual(longestNamedBook(books), expectedResult04);


// 05 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
}

assert.deepStrictEqual(containsA(), 20);


/* 06 - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o
formato {name: nome do aluno, average: media das notas}. Para isso vamos assumir que a posição 0 de notas
refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map.
Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante
expected.*/
const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);