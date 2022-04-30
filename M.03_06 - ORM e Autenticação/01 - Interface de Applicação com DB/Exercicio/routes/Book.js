const express = require('express');

const Router = express.Router();
const { books: {
    getById,
    newBook,
    editBook,
    remove,
    search,
}} = require('../controllers');

Router
  .route('/')
    .post(newBook);

// :3000/book/search?author=Autor 03
Router
  .route('/search')
    .get(search);

Router
  .route('/:id')
    .get(getById)
    .get(search)
    .put(editBook)
    .delete(remove);


module.exports = Router;