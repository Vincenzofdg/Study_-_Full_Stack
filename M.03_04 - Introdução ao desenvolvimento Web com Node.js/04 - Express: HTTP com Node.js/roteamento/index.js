const express = require('express');
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get('/', (req, res) => res.send('hello world'));

/* Rota com caminho '/', utilizando o método POST */
app.post('/', (req, res) => res.send('hello world'));

/* Rota com caminho '/', utilizando o método PUT */
app.put('/', (req, res) => res.send('hello world'));

/* Rota com caminho '/', utilizando o método DELETE */
app.delete('/', (req, res) => res.send('hello world'));

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', (req, res) => res.send('hello world'));

// Ou podemos encadear as requisições para evitar repetir o caminho
app
  .route('/')
  .get((req, res) => res.send('hello world get'))
  .post((req, res) => res.send('hello world post'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));