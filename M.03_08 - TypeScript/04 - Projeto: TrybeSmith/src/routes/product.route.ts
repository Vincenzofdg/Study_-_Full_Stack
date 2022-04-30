import { Router } from 'express';

import ProductController from '../controllers/product.controller';
import validation from '../middleware/validation';
import schema from '../schema/validation';

const myRoute = Router();
const { getAll, create } = new ProductController();

myRoute
  .route('/')
  .get(getAll)
  .post(validation(schema), create);

export default myRoute;
