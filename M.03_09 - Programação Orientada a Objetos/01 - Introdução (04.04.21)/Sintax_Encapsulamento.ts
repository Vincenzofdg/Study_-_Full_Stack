class Person {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

  getWeight() {
    return this._weight;
  }

  // Retorna a idade
  get age() {
    return this._age;
  }

// Modifica a idade
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) this._age = newValue;
  }

  birthday() {
    this._age += 1;
  }
}

const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);

p1.name = 'Mariah';
console.log(p1.name); // Mariah
console.log(p1.getWeight()); // 58
console.log(p2.age); // 18
p2.birthday(); // Adiciona 1 para p2.age
console.log(p2.age); // 19
p2.age = 17;
console.log(p2.age); // 17
console.log(p1.height); // 171
