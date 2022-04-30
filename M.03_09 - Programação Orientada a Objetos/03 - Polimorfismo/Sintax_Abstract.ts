abstract class Animal {
  public _name: string

  constructor(name: string) {
    this._name = name
  }

  abstract move(): void
}

class Bird extends Animal {
  move() { 
    console.log(`${this._name} está voando.`);
  }
}

class Mammal extends Animal {
  move() {
    console.log(`${this._name} está andando.`);
  }
}

class Fish extends Animal {
  move() {
    console.log(`${this._name} está nadando.`);
  }
}

const tuburao = new Fish('Tubarão');
const papagaio = new Bird('Papagaio');
const tatu = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}
myMove(tuburao);  // Tubarão está nadando.
myMove(papagaio); // Papagaio está voando.
myMove(tatu);     // Tatu está andando.
