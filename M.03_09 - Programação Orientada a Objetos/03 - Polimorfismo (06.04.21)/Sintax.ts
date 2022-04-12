class Animal {
  public _name: string;

  constructor(name: string) {
    this._name = name;
  }
  
  move(): void {
    console.log(`${this._name} está se movendo.`);
  }
}

class Bird extends Animal {
  move(): void {
    console.log(`${this._name} está voando.`);
  }
}

class Mammal extends Animal {
  move(): void {
    console.log(`${this._name} está andando.`);
  }
}

const moviment = (animal: Animal) => animal.move();

const tubarao = new Animal('Tubarão');
const papagaio = new Bird('Papagaio');
const tatu = new Mammal('Tatu');

moviment(tubarao)   // Tubarão está se movendo.
moviment(papagaio)  // Papagaio está voando.
moviment(tatu)      // Tatu está andando.
