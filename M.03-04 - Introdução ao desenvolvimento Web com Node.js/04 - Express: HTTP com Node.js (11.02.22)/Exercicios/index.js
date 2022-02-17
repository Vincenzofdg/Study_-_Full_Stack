const express = require('express');

const app = express();

app.use(express.json());

// Exercicio 01
app.get('/ping', (_req, res) => res.status(200).json({ msg: 'pong' }));

// Exercicio 02
app.post('/hello', (req, res) => {
  const { name } = req.body;
  const msg = { msg: `Hello, ${name}!` };
  return res.status(200).json(msg);
})

// Exercicio 03
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  const pass = { msg: `Hello, ${name}!` };
  const deny = { msg: 'Unauthorized' };

  if (age > 17) return res.status(201).json(pass);
  else return res.status(401).json(deny) ;
})

// Exercicio 04
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params; // :3001/users/Cleber/45
  const msg = { msg: `Seu nome é ${name} e você tem ${age} anos de idade` }
  
  return res.status(200).json(msg);
} );

app.listen(3001, () => console.log('Exercicio na porta 3001'));
