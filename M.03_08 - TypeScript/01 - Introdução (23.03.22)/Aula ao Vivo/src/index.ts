import { addStudent, getStudents, Module } from './students/student';

// Importantando a tipagem do express
import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response, next: Function) => {
  return res.status(200).json(getStudents());
});

app.post('/', (req: Request, res: Response, next: Function) => {
  addStudent({
        name: 'Zambs',
        age: 34,
        module: Module.back,
      });
  return res.status(201).end();
});

app.listen(3000, () => console.log('T15 na 3000'));

// Função retorna qualquer coisa 
// function main(): any {
//   addStudent({
//     name: 'Zambs',
//     age: 34,
//     module: Module.back,
//   });
//   const students = getStudents();
//   console.log('\nStudents:\n', students);
//   // sayHello(students);
//   // if (Math.random() < 0.5) {
//   //   return 1;
//   // } else {
//   //   return 'str';
//   // }
// }
// // void null undefined

// main();
