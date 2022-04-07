class Person {
  name: string;
  height: number;
  weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p1 = new Person('Maria', 171, 58); // Creating person Maria
const p2 = new Person('João', 175, 66); // Creating person João
console.log(p1.name, p1.height, p1.weight); // Maria 171 58
console.log(p2.name, p2.height, p2.weight); // João 175 66
p1.sleep(); // Maria: zzzzzzz
p2.sleep(); // João: zzzzzzz

// ---------------------------------------------------------------
// Para Fixar
// 01. Crie uma classe chamada Tv, com os atributos:
// - brand: marca da TV;
// - size: tamanho em polegadas;
// - resolution: resolução da tela;
// - connections: conexões disponíveis(HDMI, Ethernet, etc.);
// 02. Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
// 03. Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

interface Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
}

class Tv {
  constructor (a: string, b: number, c: string, d: string[]) {
    this.brand = a;
    this.size = b;
    this.resolution = c;
    this.connections = d;
  }

  turnOn(): void {
    const { brand, size, resolution, connections } = this
    console.log(`Tv: ${brand}, ${size}\nResolution: ${resolution}\nConnections: ${connections.join(', ')}`)
  }
}

const myTV = new Tv('LG', 32, 'HD', ['HDMI', 'Ethernet', 'Wifi']);
myTV.turnOn();


