// Classes são uma maneira de definir a forma de um objeto.

enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
}

class Person {
  name: string;
  birthDate: Date;
  eyeColor: EyeColor; // na cor dos olhos usamos uma Enum com valores pré definidos

  constructor(name: string, birthDate: Date, eyeColor: EyeColor) {
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo.`)
  }

  walk(): void {
    console.log(`${this.name} está andando.`)
  }
};

const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

person1.eyeColor = EyeColor.Brown;
console.log(person1);
person1.speak()

console.log(person2);
person2.walk();

// ===========================================================
// USANDO O PLAYGROUND ==> https://www.typescriptlang.org/play

// Tipando a classe para que nao precise tipar o _nome e _poder antes do contrutor
interface Hero {
  _nome: string;
  _poder: string;
  fraseDoHero(frase: string): string;
}

class Hero {
  // quando iniciar a classe, deve-se receber caracteristicas para que haja o funcionamento
  constructor(nome: string, poder: string) {
    // usando o underline pois se esta criando as propriedades no contructor
    this._nome = nome;
    this._poder = poder;
  };

  fraseDoHero(frase: string) {
    return `${this._nome} diz: ${frase}`
  };
};

// Quando se for criar uma instacia reservada da classe, ussa-se o new
const Hero01 = new Hero('Estudante', 'Estudar');
const Hero02 = new Hero('Não Estudante', 'Não estudar');

console.log(Hero01.fraseDoHero('Eu consigo!'));
console.log(Hero02.fraseDoHero('Eu não consigo!'));
