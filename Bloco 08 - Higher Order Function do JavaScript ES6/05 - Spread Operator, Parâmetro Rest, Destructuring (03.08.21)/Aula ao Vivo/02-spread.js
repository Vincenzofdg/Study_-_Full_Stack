// Una os dois arrays de duas formas diferentes! Com loops e com spread operators!

const assert = require('assert');

const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

// LOOP
let awesomeBooks = [...horrorBooks, ...scifiBooks];

// horrorBooks.forEach((book)=>awesomeBooks.push(book));

// console.log(awesomeBooks);

// scifiBooks.forEach((book)=>awesomeBooks.push(book));

// console.log(awesomeBooks);

// SPREAD OPERATOR

assert.deepStrictEqual(
  awesomeBooks,
  ['It', 'The Shining', 'I, Robot.', 'Caves of Steel', 'The End of Eternity']
);