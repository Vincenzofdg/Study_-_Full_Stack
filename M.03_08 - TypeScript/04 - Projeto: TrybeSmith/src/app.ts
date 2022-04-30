import express from 'express';

import Products from './routes/product.route';
import Users from './routes/user.route';
import Orders from './routes/order.route';

const app = express();

app.use(express.json());

app.use('/products', Products);
app.use('/users', Users);
app.use('/orders', Orders);

export default app;
