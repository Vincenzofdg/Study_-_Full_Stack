const { Router } = require('express');
const userController = require('../controllers/userController');

const userRoute = Router();

// retornar usuário
userRoute.get('/:id', userController.getWithoutPassword);

// editar usuário
userRoute.put('/:id', userController.edit);

// remover usuário
userRoute.delete('/:id', userController.remove);

// listar usuarios
userRoute.get('/', userController.listWithoutPassword);

// adicionar usuário
userRoute.post('/', userController.add);

module.exports = userRoute;