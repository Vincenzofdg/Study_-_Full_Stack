"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./students/student");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res, next) => {
    return res.status(200).json((0, student_1.getStudents)());
});
app.post('/', (req, res, next) => {
    (0, student_1.addStudent)({
        name: 'Zambs',
        age: 34,
        module: student_1.Module.back,
    });
    return res.status(201).end();
});
app.listen(3000, () => console.log('T15 na 3000'));
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
