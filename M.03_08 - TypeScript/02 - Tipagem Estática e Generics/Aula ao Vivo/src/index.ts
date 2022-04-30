import { StudentModel, Module, Student, IStudentModel } from './student';

import express, { Express, Request, Response, NextFunction } from 'express';
import connection from './connection';

const app: Express = express();

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const studentModel: IStudentModel = new StudentModel(connection);
  const students = await studentModel.getStudents();
  return res.status(200).json(students);
});

app.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const { name, age, module } = req.body;
  const studentModel: IStudentModel = new StudentModel(connection);

  await studentModel.addStudent({ name, age, module });
  return res.status(201).end();
});

app.listen(3000, () => console.log('T15 na 3000'));
