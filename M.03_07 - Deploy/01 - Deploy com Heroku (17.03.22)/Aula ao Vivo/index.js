const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const server_env = process.env.SERVER_ENV || 'Não foi dessa vez! :/';

app.get('/', (_req, res) => res.send(`Você está no ambiente TOP DAS GALAXIAS`));

app.listen(PORT, () => console.log(`Rodando na ${PORT} `));
