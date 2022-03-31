// Cor dos Carros
export enum Colors {
  BLACK = "Preta",
  WHITE = "Branca",
  RED = "Vermelha",
  SILVER = "Prata"
};

// Possiveis Direções (Volante)
export enum Directions {
  LEFT = "Esquerda",
  RIGHT = "Direita",
};

// Portas do Veiculo
export enum Doors {
  DRIVER = "Da pessoa motorista",
  RIDE = "Da pessoa carona",
  BEHIND_DRIVER = "De trás da pessoa motorista",
  BEHIND_RIDE = "De trás da pessoa carona"
};

// Criação da Classe Carro
export class Car {
  _name: string;
  _color: Colors;
  _doors: number;

  constructor(name: string, color: Colors, doors: number) {
    this._name = name;
    this._color = color;
    this._doors = doors;
  }

  turnOn(): void { console.log("Ligando carro.") };
  turnOff(): void { console.log("Desligando carro.") };
  turn(direction: Directions): void { console.log(`Virando para a ${direction}.`) };
  speedUp(): void { console.log("Acelerando carro.") };
  speedDown(): void { console.log("Reduzindo a velocidade do carro.") };
  stop(): void { console.log("Parando carro.") };
  honk(): void { console.log("Buzinando: BIP BIP") };
  openTheDoor(door: Doors): void { console.log(`Abrindo a porta: ${door}.`) };
  closeTheDoor(door: Doors): void { console.log(`Fechando a porta: ${door}.`) };
};
