import { Request, Response } from 'express';
import User from '../models/User';
import { IUser } from '../models/IUser';
import UserValidation from '../validations/userValidation';
import connection from '../models/connection';
import MockConnection from '../models/mockedConn';

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password, role } = req.body as IUser;

  if (UserValidation.validateUser(email, password, role)) {
    await User.create({ username, email, password, role });
    res.status(200).json({
      message: 'Usuário criado com sucesso!',
    });
  } else {
    res.status(400).json({
      message: 'Dados inválidos.',
    });
  }
};