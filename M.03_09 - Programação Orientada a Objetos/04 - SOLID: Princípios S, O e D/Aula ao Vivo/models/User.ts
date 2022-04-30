import { IUser } from './IUser';
import GenericConnection from './IConnection';
import connection from './connection';

export default class User {
  public static initUser(user: IUser): IUser {
    const { id, username, email, password, role } = user;
    const newUser: IUser = {
      id,
      username,
      email,
      password,
      role,
    };
    return newUser;
  }

  public static async create(newUser: IUser, conn: GenericConnection = connection): Promise<void> {
    await conn.execute(
      'INSERT INTO solid_example.users (username, email, password, role) VALUES (?,?,?,?)',
      [ newUser.username, newUser.email, newUser.password, newUser.role ],
    );
  }
}