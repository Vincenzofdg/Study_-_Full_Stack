// Cor dos Carros
enum Colors {
  BLACK = "Preta",
  WHITE = "Branca",
  RED = "Vermelha",
  SILVER = "Prata"
};

// Possiveis Direções (Volante)
enum Directions {
  LEFT = "Esquerda",
  RIGHT = "Direita",
};

// Portas do Veiculo
enum Doors {
  DRIVER = "Da pessoa motorista",
  RIDE = "Da pessoa carona",
  BEHIND_DRIVER = "De trás da pessoa motorista",
  BEHIND_RIDE = "De trás da pessoa carona"
};

// Criação da Classe Carro
class Car {
  _color: Colors;
  _doors: number;

  constructor(color: Colors, doors: number) {
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

const car01 = new Car(Colors.BLACK, 3);

car01.turnOn();
car01.turnOff();
car01.turn(Directions.LEFT);
car01.speedUp();
car01.speedDown();
car01.stop();
car01.honk();
car01.openTheDoor(Doors.DRIVER);
car01.closeTheDoor(Doors.RIDE);