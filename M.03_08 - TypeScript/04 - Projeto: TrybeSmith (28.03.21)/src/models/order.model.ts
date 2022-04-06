import { RowDataPacket } from 'mysql2/promise';

import connection from './connection';
import IOrder from '../interfaces/order';

export default class ProductModel {
  private theConnection;

  constructor() {
    this.theConnection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const [result] = await this.theConnection.execute<RowDataPacket[]>(
      `SELECT Trybesmith.Products.orderId, Trybesmith.Orders.userId, 
      CONCAT('[',GROUP_CONCAT(Trybesmith.Products.id),']') AS products  FROM Trybesmith.Products 
      INNER JOIN Trybesmith.Orders ON Trybesmith.Products.orderId = Trybesmith.Orders.id 
      GROUP BY Trybesmith.Products.orderId ORDER BY Trybesmith.Orders.userId, 
      COUNT(Trybesmith.Products.orderId);`,
    );
    return result as IOrder[];
  }
}