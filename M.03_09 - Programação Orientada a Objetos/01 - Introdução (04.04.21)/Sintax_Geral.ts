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

const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/

// Para Fixar
// 01. Crie uma classe chamada Tv, com os atributos:
// - brand: marca da TV;
// - size: tamanho em polegadas;
// - resolution: resolução da tela;
// - connections: conexões disponíveis(HDMI, Ethernet, etc.);
// - connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.

// 02. Dentro da classe Tv, crie o método turnOn , que imprimirá os atributos inicializados no construtor.
// 03. Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.



