import Person from './Person';
import Student from './Studante';

const vincenzo = new Student('Vincenzo', new Date("1995-08-28T03:24:00"));
const beatriz = new Student('Beatriz', new Date("1995-10-26T03:24:00"));

vincenzo.examsGrades = [9, 10, 7, 8.5]; // 34.5 // 8.625
vincenzo.worksGrades = [5, 6.7, 7.5, 10];

beatriz.examsGrades = [5, 10, 7.5, 10]; // 32.5 // 8.125
beatriz.worksGrades = [8, 9.5, 5.5, 8]; 

const test = (param: any): void => {
  const { name, enrollment, examsGrades, worksGrades, sumGrade, sumAverageGrade } = param; 
  console.log(`Nome: ${name} | RA: ${enrollment}\nGrades: ${examsGrades} | Works: ${worksGrades}`);
  console.log(`${sumGrade(examsGrades)} ${sumAverageGrade(examsGrades)}`);
}

test(vincenzo)
