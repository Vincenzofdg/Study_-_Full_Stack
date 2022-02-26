const express = require('express');

const app = express();
app.use(express.json());

const User = require('./models/User');

const PORT = process.env.PORT || 3000;
const OK = 200;
const CREATED = 201;
const NOT_FOUND = 404;

app.get('/user', async (req, res) => {
    const users = await User.getAll();

    return res.status(OK).json(users);
})

app.get('/user/:id', async (req, res) => {
    const { id } = req.params;

    const user = await User.getById(Number(id));

    if (user.length === 0) return res.status(NOT_FOUND).json({
        error: true,
        message: 'Usuário não encontrado'
    })

    return res.status(OK).json(user)
});

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

app.put('/user/:id', async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const request = [ firstName, lastName, email, password ];

    if (!(await User.getById(id))) return res.status(NOT_FOUND).json({
        error: true,
        message: 'Usuário não encontrado'
    });

    if (User.isNotValid(...request).error) {
        const msg = User.isNotValid(...request);
        res.status(OK).json(msg);
    }

    const editedUser = await User.update(...request, id);

    return res.status(OK).json(editedUser);
})

app.listen(PORT, console.log(`Exercicio rodando na porta ${PORT}`));
