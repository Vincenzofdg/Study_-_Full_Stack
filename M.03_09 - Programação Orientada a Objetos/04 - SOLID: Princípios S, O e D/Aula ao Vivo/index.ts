import express from 'express';
import { createUser } from './controllers/userController';

const app = express();

app.use(express.json());

app.post('/users', createUser);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});