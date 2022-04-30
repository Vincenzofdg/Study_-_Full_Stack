import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';

export enum Module {
  fundamentos,
  front,
  back,
  CS,
}
export type Student = {
  name: string;
  age: number;
  module: Module;
};

export interface IStudentModel {
  _connection: Pool;
  addStudent: (student: Student) => Promise<void>;
  getStudents: () => Promise<Student[]>;
}

export class StudentModel implements IStudentModel {
  _connection: Pool;
  constructor(connection: Pool) {
    this._connection = connection;
  }

  addStudent = async (student: Student) => {
    const { name, age, module } = student;
    await this._connection.execute<ResultSetHeader>(
      'INSERT INTO student (name, age, module) VALUES (?,?,?)',
      [name, age, module],
    );
  };
  getStudents = async (): Promise<Student[]> => {
    const [result] = await this._connection.execute<RowDataPacket[]>(
      'SELECT * FROM student;',
    );
    return result as Student[];
  };
}
