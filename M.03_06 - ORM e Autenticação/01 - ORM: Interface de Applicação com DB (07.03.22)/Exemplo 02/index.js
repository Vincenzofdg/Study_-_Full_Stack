const express = require('express');

// Importando a model
const { Store } = require('./sequelize/models')

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    Store.findAll()
        .then(dados => res.status(200).json(dados))
        .catch(e => {
            console.log(e.message);
            res.status(500).json({ msg: 'Ocorreu alguma falha com o servidor' })
        })
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
