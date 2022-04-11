class Person {
  constructor(
    private _name: string,
    private _birthDate: Date = new Date()
  ) { }

  get name(): string { return this._name };
  get birthDate(): Date { return this._birthDate };

  set name(param: string) {
    this._name = param;
  }

  private isNameValid(name: string) {
    if (name.length <= 3) throw new Error('Nome deve conter mais de 3 letras');
  }
}

const person01 = new Person('Vincenzo', new Date(30, 1, 2021));
console.log(person01) //