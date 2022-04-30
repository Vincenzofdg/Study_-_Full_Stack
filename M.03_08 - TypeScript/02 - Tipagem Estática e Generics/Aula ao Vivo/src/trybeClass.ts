import { Student, Module } from './student';

type StudentProjectGrade = [Student, string, number];

type TrybeClass = {
  name: string;
  students: Student[];
  module: Module | null;
  grades: StudentProjectGrade[];
};

let trybeClass: TrybeClass = {
  name: 'T15',
  students: [],
  module: 2,
  grades: [],
};

const addGrade = (studentName: string, project: string, grade: number): string | void => {
  const foundStudent = trybeClass.students.find((st) => st.name === studentName);

  if (!foundStudent) return 'NOT FOUND';
  
  trybeClass.grades.push([foundStudent, project, grade]);
};
