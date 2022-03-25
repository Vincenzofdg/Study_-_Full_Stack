"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudents = exports.addStudent = exports.Module = void 0;
var Module;
(function (Module) {
    Module[Module["fundamentos"] = 0] = "fundamentos";
    Module[Module["front"] = 1] = "front";
    Module[Module["back"] = 2] = "back";
    Module[Module["CS"] = 3] = "CS";
})(Module = exports.Module || (exports.Module = {}));
const students = [];
const addStudent = (student) => students.push(student);
exports.addStudent = addStudent;
const getStudents = () => students;
exports.getStudents = getStudents;
// export const printStudent = (student: string) => {
//   if (typeof student === 'string') {
//     console.log(student.toUpperCase());
//   } else {
//     console.log(student);
//   }
// };
// export const sayHello = (students: string[] | string) => {
//   if (Array.isArray(students)) {
//     students.forEach((student) => console.log(`Hello ${student}`));
//   } else {
//     console.log(`Hello ${students}`);
//   }
// };
