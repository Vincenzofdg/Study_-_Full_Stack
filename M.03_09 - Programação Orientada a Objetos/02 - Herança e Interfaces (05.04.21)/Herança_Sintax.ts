class Animal {    
  // public x: number
  // constructor(x: number) { this.x = x }

  // Pode ser substituído por:

  // constructor(public x: number) { }
  constructor(public name: string, private birthDate: Date) { }

  get age() {
    const birthday = Date.parse(this.birthDate)
    const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime()); // milissegundos

    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25); // Convertendo de volta para anos inteiros, considerando anos bissextos.
  }
}

class Mammal extends Animal {
  walk() {
    console.log(`${this.name} está andando!`);
  }
}

const tiger = new Mammal('Tigre', new Date(Date.parse('May 03, 2018')));

const main = (animal: Animal) => console.log(animal.age);

main(tiger); // 3
tiger.walk(); // Tigre está andando!
