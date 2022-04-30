import { Request, Response } from 'express';

import OrderService from '../services/order.service';

export default class OrderController {
  private service;

  constructor() {
    this.service = new OrderService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.service.getAll();

    return res.status(200).json(orders);
  };
}
