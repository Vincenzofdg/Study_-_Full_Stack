"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Student extends Person_1.default {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._examsGrades = [];
        this._worksGrades = [];
        this._enrollment = this.newEnrollment();
    }
    get enrollment() { return this._enrollment; }
    get examsGrades() { return this._examsGrades; }
    get worksGrades() { return this._worksGrades; }
    set examsGrades(param) {
        this._examsGrades = param;
    }
    set worksGrades(param) {
        this._worksGrades = param;
    }
    newEnrollment() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `STU${randomStr}`;
    }
    sumGrade(param) {
        return param.reduce((acc, curr) => acc + curr, 0);
    }
    sumAverageGrade(param) {
        return (this.sumGrade(param) / param.length);
    }
}
exports.default = Student;
