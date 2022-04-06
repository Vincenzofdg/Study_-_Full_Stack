import ProductModel from '../models/product.model';
import IProduct from '../interfaces/product';
import ICreate from '../interfaces/toCreate';

export default class ProductService {
  private model;

  constructor() {
    this.model = new ProductModel();
  }

  public getAll = (): Promise<IProduct[]> => this.model.getAll();

  public create = async ({ name, amount }: ICreate) => {
    const newId = await this.model.create({ name, amount });
    return newId;
  };
}