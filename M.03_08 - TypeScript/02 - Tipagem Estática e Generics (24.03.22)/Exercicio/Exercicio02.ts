// Importando do Exercício 01
import { Colors, Directions, Doors, Car } from './Exercicio01';

const Carro = new Car("Volksvagem", Colors.SILVER, 4);

Carro.openTheDoor(Doors.DRIVER);
Carro.closeTheDoor(Doors.DRIVER);
Carro.turnOn();
Carro.speedUp();
Carro.speedDown();
Carro.turn(Directions.LEFT);
Carro.speedUp();
Carro.speedDown();
Carro.turn(Directions.RIGHT);
Carro.speedUp();
Carro.speedDown();
Carro.turn(Directions.RIGHT);
Carro.speedDown();
Carro.stop();
Carro.openTheDoor(Doors.BEHIND_RIDE);
Carro.closeTheDoor(Doors.BEHIND_RIDE);
Carro.speedUp();
Carro.speedDown();
Carro.turn(Directions.RIGHT);
Carro.speedUp();
Carro.speedDown();
Carro.turn(Directions.LEFT);
Carro.speedUp();
Carro.speedDown();
Carro.turn(Directions.RIGHT);
Carro.speedDown();
Carro.stop();
Carro.openTheDoor(Doors.BEHIND_RIDE);
Carro.closeTheDoor(Doors.BEHIND_RIDE);
Carro.speedUp();