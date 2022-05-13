const express = require('express');

const app = express();

app.listen(3000, () => console.log('TESTANDO APLICACAO COM DOCKER'))

app.get('/', (_req, res) => { res.status(200).json({ msg: 'FUNCIONANDO' })})