import { ResultSetHeader } from 'mysql2/promise';

import connection from './connection';
import IUser from '../interfaces/user';

export default class UserModel {
  private theConnection;

  constructor() {
    this.theConnection = connection;
  }

  public async create({ username, classe, level, password } : IUser) {
    const [result] = await this.theConnection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return result.insertId;
  }  
}