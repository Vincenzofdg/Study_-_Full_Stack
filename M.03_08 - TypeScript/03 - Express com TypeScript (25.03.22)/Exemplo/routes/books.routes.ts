import { Router } from 'express';
import Book from '../controllers/books.controller';
import validation from '../middleware/books.middleware';

const myRoute = Router();
const { getAll, getById, create, update, remove } = new Book();

myRoute
  .route('/')
    .get(getAll)
    .post(validation, create);
myRoute
  .route('/:id')
    .get(getById)
    .put(validation, update)
    .delete(remove);

export default myRoute;
