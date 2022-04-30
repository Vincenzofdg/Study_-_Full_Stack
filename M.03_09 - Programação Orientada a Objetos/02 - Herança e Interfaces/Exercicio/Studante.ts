import Person from './Person';

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];
  
  constructor(name: string, birthDate: Date) { 
    super(name, birthDate);
    this._enrollment = this.newEnrollment();
  }

  get enrollment(): string { return this._enrollment }
  get examsGrades(): number[] { return this._examsGrades }
  get worksGrades(): number[] { return this._worksGrades }

  set examsGrades(param: number[]) { 
    this._examsGrades = param
  }

  set worksGrades(param: number[]) { 
    this._worksGrades = param
  }

  private newEnrollment() {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
  }

  public sumGrade(param: number[]): number {
    return param.reduce((acc, curr) => acc + curr, 0)
  }

  public sumAverageGrade(param: number[]): number {
    return (this.sumGrade(param) / param.length);
  }
}