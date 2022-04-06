import UserModel from '../models/user.model';
import IUser from '../interfaces/user';

export default class ProductService {
  private model;

  constructor() {
    this.model = new UserModel();
  }

  public create = async ({ username, classe, level, password }: IUser) => {
    const userId = await this.model.create({ username, classe, level, password });
    return userId;
  };
}