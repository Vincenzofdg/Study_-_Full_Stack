const express = require('express');

const app = express();
const PORT = process.env.PORT | 3000

app.get('/', (_req, res) => { 
  res.status(200).json({
    msg: 'Hot Reload Funcionando Corretamente'
  })
})

app.listen(PORT, () => console.log(`Rodando na Porta: ${PORT}`))
