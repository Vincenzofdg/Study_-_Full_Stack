const express = require('express');

const app = express();
app.use(express.json());

const User = require('./models/User');

const PORT = process.env.PORT || 3000;
const OK = 200;
const CREATED = 201;
// const BAD = 400;
// const NOT_FOUND = 404;

app.get('/user', async (req, res) => {
    const users = await User.getAll();

    return res.status(OK).json(users);
})

app.post('/user', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const request = [ firstName, lastName, email, password ];

    if(User.isNotValid(...request).error) {
        const msg = User.isNotValid(...request);
        res.status(OK).json(msg);
    }

    const newUser = await User.add(...request);

    res.status(CREATED).json(newUser);
});

app.listen(PORT, console.log(`Exercicio rodando na porta ${PORT}`));
