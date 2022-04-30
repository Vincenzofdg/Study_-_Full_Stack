const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
// heroku config:set MSG='Uma nova mensagem' --app exercicio-do-dia
const MSG = process.env.MSG || 'Variável de Ambiente não Criada'

app.get('/', (_req, res) => res.status(200).send('Exercicio do dia'));

app.get('/exercicio01', (_req, res) => res.status(200).send('Está vivo!!!'));

app.get('/exercicio02', (_req, res) => res.status(200).send(MSG));

app.listen(PORT, () => console.log(`Exercicio rodando na porta ${PORT}`));