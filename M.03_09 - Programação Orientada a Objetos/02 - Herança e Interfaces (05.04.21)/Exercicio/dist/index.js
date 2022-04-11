"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Studante_1 = __importDefault(require("./Studante"));
const vincenzo = new Studante_1.default('Vincenzo', new Date("1995-08-28T03:24:00"));
const beatriz = new Studante_1.default('Beatriz', new Date("1995-10-26T03:24:00"));
vincenzo.examsGrades = [9, 10, 7, 8.5]; // 34.5 // 8.625
vincenzo.worksGrades = [5, 6.7, 7.5, 10];
beatriz.examsGrades = [5, 10, 7.5, 10]; // 32.5 // 8.125
beatriz.worksGrades = [8, 9.5, 5.5, 8];
const test = (param) => {
    const { name, enrollment, examsGrades, worksGrades, sumGrade, sumAverageGrade } = param;
    console.log(`Nome: ${name} | RA: ${enrollment}\nGrades: ${examsGrades} | Works: ${worksGrades}`);
    console.log(`${sumGrade(examsGrades)} ${sumAverageGrade(examsGrades)}`);
};
test(vincenzo);
function soma(param) {
    return param.reduce((acc, curr) => acc + curr, 0);
}
console.log(soma([1, 2, 3, 4]));
