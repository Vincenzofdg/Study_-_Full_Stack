const express = require('express');
const { User } = require('../models');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, username, email, password } = req.body;

  User.create({ name, username, email, password })
    .then((newUser) => {
      // Separamos a senha do restante do objeto, para que ela não seja retornada na API
      const { id, name, username, email, createdAt, updatedAt } = newUser;

      res.status(200).json({ id, name, username, email, createdAt, updatedAt });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

router.get('/', (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

router.get('/:id', (req, res, next) => {
  User.findByPk(req.params.id)
    .then((user) => {
      if (user === null) {
        res.status(404).send({ message: 'Usuário não encontrado' });
      }
      
      if(!req.query.includeProducts) return res.status(200).json(user);
      
      return  user.getProducts().then(products=> {
        res.status(200).json({...user, products})
      })

    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((users) => {
      res.status(200).send({ message: 'Usuário excluído com sucesso.' });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

router.put('/:id', (req, res) => {
  const { name, username, email, password } = req.body;

  User.update(
    { name, username, email, password },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((users) => {
      res.status(200).send({ message: 'Usuário atualizado com sucesso.' });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

module.exports = router;