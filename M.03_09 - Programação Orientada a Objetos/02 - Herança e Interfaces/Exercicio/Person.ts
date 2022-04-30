export default class Person {
  constructor(
    private _name: string,
    private _birthDate: Date = new Date()
  ) { }

  get name(): string { return this._name };
  get birthDate(): Date { return this._birthDate };
  get age(): number { return this.howOld(this._birthDate) }
  
  set name(param: string) {
    this.isNameValid(param);
    this._name = param;
  }
  
  set bithDate(param: Date) {
    const age = this.howOld(param);

    if (!this.isAgeValid(age)) throw new Error('Idade acima de 120');

    this._birthDate = param;
  }

  private howOld(param: Date): number { 
    const diff = new Date().getTime() - param.getTime();

    if (diff <= 0) throw new Error('Data Inválida');

    const yearInMilissegundos = 31536000000;

    return Math.floor(diff / yearInMilissegundos);
  };

  private isNameValid(name: string): void {
    if (name.length < 3) throw new Error('Nome deve conter mais de 3 letras');
  }

  private isAgeValid(param: number) {
    const result = param < 120 ? true : false;
    return result;
  }
}
