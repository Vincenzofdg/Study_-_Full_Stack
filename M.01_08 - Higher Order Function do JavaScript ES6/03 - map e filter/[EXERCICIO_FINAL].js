const assert = require('assert');

const books = [{
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
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


/*01 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA*/
const expectedResult01 = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames(colection01) {
  // escreva seu código aqui
  return colection01.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
}

assert.deepStrictEqual(formatedBookNames(books), expectedResult01);


/*02 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade
author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro
foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando
suas idades quando o livro foi lançado.*/
const expectedResult02 = [{
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge(colection02) {
  // escreva seu código aqui
  return colection02.map((book) => ({
    age: (book.releaseYear - book.author.birthYear),
    author: book.author.name,
  })).sort((n1, n2) => n1.age - n2.age);
}

assert.deepStrictEqual(nameAndAge(books), expectedResult02);


/*03 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.*/
const expectedResult03 = [
  { 
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];

function fantasyOrScienceFiction(colection03) {
  // escreva seu código aqui
  return colection03.filter((book) => book.genre == 'Ficção Científica' || book.genre == 'Fantasia');
}
console.log(fantasyOrScienceFiction(books))

assert.deepStrictEqual(fantasyOrScienceFiction(books), expectedResult03);


/*04 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.*/
const expectedResult04 = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered(colection04) {
  // escreva seu código aqui
  return colection04.filter((book) => (2021 - book.releaseYear) > 60).sort((a, b) => a.releaseYear - b.releaseYear);
}

assert.deepStrictEqual(oldBooksOrdered(books), expectedResult04);


/*05 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.*/
const expectedResult05 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors(colection05) {
  // escreva seu código aqui
  return colection05.filter((book) => book.genre == 'Ficção Científica' || book.genre == 'Fantasia').map((book) => book.author.name).sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(books), expectedResult05);


/*06 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.*/
const expectedResult06 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks(colection06) {
  // escreva seu código aqui
  return colection06.filter((book) => (2021 - book.releaseYear) > 60).map((book) => book.name);
}

assert.deepStrictEqual(oldBooks(books), expectedResult06);


/*07 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.*/
const expectedResult07 = 'O Senhor dos Anéis';

function authorWith3DotsOnName(colection07) {
  return colection07.find((book) => (book.author.name.split(' ').filter((palavra) => palavra.endsWith('.')).length === 3)).name;
}

assert.deepStrictEqual(authorWith3DotsOnName(books), expectedResult07);
