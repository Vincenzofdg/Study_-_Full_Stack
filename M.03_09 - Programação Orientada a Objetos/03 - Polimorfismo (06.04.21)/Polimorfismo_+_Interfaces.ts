interface Person {
  id: number;
  name: string;
  showIdentification(): void;
}

class PhysicalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cpf;

  constructor(name: string, cpf: string) {
    this._id = PhysicalPerson.newId();
    this._name = name;
    this._cpf = cpf;
  }

  get id() { return this._id; }  
  get name() { return this._name; }
  get cpf() { return this._cpf; }
  
  private static newId() { return this.lastId++; }

  public showIdentification() { console.log(this.id, this._cpf); }
}

class LegalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cnpj;

  constructor(name: string, cnpj: string) {
    this._id = LegalPerson.newId();
    this._name = name;
    this._cnpj = cnpj;
  }

  get id() { return this._id; }
  get name() { return this._name; }
  get cnpj() { return this._cnpj; }

  private static newId() { return this.lastId++; }
  
  public showIdentification() { console.log(this.id, this._cnpj); }
}

const john = new PhysicalPerson('John', '123456789');
const jenny = new PhysicalPerson('Jenny', '987654321');
const lp = new LegalPerson('International Sales SA', '834729384723');

const showIdentification = (person: Person) => {
  person.showIdentification();
}

showIdentification(john);   // 0 123456789
showIdentification(jenny);  // 1 987654321
showIdentification(lp);     // 0 834729384723
