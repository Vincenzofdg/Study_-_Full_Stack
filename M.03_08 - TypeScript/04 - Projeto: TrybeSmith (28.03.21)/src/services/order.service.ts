import OrderModel from '../models/order.model';
import IOrder from '../interfaces/order';
import IMap from '../interfaces/map';

export default class OrderService {
  private model;

  constructor() {
    this.model = new OrderModel();
  }

  public getAll = async (): Promise<IMap[]> => { 
    const result = await this.model.getAll(); 
    const newResult = result.map((order: IOrder): IMap => (
      {
        id: order.orderId,
        userId: order.userId,
        products: JSON.parse(order.products),
      }));

    console.log(newResult);
    return newResult;
  };
}