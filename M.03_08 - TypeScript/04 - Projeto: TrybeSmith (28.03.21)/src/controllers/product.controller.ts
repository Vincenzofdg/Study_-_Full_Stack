import { Request, Response } from 'express';

import ProductService from '../services/product.service';

export default class ProductController {
  private service;

  constructor() {
    this.service = new ProductService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();

    return res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;

    const created = await this.service.create({ name, amount });
    const result = { item: { id: created, name, amount } };
    
    return res.status(201).json(result);
  };
}
