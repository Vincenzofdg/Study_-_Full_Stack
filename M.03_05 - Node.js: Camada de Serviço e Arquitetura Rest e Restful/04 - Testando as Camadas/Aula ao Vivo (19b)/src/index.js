const express = require('express');
const ConflitError = require('./errors/ConflitError');
const NotFoundError = require('./errors/NotFoundError');
require('express-async-errors');
const userRoute = require('./routes/userRoute');

const app = express();
app.use(express.json());

app.use('/user', userRoute);

app.use((err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError': res.status(400).json({ message }); break;
    case NotFoundError.name: res.status(404).json({ message }); break;
    case ConflitError.name: res.status(409).json({ message }); break;
    default: res.status(500).json({ message });
  }
});

app.listen(3000, () => console.log('rodando na porta 3000'));