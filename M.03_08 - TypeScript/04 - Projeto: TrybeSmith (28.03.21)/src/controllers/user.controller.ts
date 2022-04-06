import { Request, Response, NextFunction } from 'express';

import UserService from '../services/user.service';

export default class UserController {
  private service;

  constructor() {
    this.service = new UserService();
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const { username, classe, level, password } = req.body;

    const created = await this.service.create({ username, classe, level, password });
    
    if (created) return res.status(201).json({ token: 'tokentestando213' });

    next(Error);
  };
}
