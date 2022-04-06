import { Router } from 'express';

import OrderController from '../controllers/order.controller';

const myRoute = Router();
const { getAll } = new OrderController();

myRoute
  .route('/')
  .get(getAll);

export default myRoute;
