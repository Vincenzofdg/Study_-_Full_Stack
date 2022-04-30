import { Router } from 'express';

import UserController from '../controllers/user.controller';
import validation from '../middleware/userValidation';
import schema from '../schema/userValidation';

const myRoute = Router();
const { create } = new UserController();

myRoute
  .route('/')
  .post(validation(schema), create);

export default myRoute;