import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Book from '../interfaces/book.interface';

export default class BookModel {
  public myConnection: Pool;

  constructor(connection: Pool) {
    this.myConnection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const [result] = await this.myConnection.execute<RowDataPacket[]>('SELECT * FROM books');
    return result as Book[];
  }

  public async getById(id: number): Promise<Book> {
    const [result] = await this.myConnection.execute('SELECT * FROM books WHERE id=?', [id]);
    const [book] = result as Book[];
    return book;
  }
  
  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const [result] = await this.myConnection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn],
    );
    const { insertId } = result;
    return { id: insertId, ...book };
  }

  public async update(id: number, book: Book) {
    const { title, price, author, isbn } = book;
    await this.myConnection.execute(
      'UPDATE books SET title=?, price=?, author=?, isbn=? WHERE id=?',
      [title, price, author, isbn, id]
    );
  }

  public async remove(id: number) {
    await this.myConnection.execute('DELETE FROM books WHERE id=?', [id]);
  }
}