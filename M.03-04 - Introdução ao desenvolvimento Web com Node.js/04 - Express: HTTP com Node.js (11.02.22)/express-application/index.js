const express = require('express');

// 01. Criando aplicação Express:
const app = express();

// 02. Quando uma requisição GET for recebida em '/hello' myRequest será chamada
app.get('/hello', myRequest);

// 03. Pedir ao Express para criar um servidor HTTP e escute a porta 3001
app.listen(3001, () => console.log('Aplicação ouvindo na porta 3001')); 

// 04. Ao tratar a requisição GET enviar status HTTP 200 (ok) e a mensagem
function myRequest(_req, res) {
  res.status(200).send('Hello World!');
}

// Obs: arrow function não funcionou
