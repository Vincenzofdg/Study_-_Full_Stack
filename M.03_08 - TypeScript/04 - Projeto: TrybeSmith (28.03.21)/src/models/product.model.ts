import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';

import connection from './connection';
import IProduct from '../interfaces/product';
import ICreate from '../interfaces/toCreate';

export default class ProductModel {
  private theConnection;

  constructor() {
    this.theConnection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const [result] = await this.theConnection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products;;');
    return result as IProduct[];
  }

  public async create({ name, amount } : ICreate) {
    const [result] = await this.theConnection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return result.insertId;
  }  
}