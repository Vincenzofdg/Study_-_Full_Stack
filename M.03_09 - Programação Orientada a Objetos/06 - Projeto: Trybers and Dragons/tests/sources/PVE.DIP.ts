import { PVE } from '../../src/Battle';
import Character from '../../src/Character';
import Fighter, { SimpleFighter } from '../../src/Fighter';
import Monster from '../../src/Monster';

class F implements Fighter {
  constructor(
    public lifePoints = 10,
    public strength = 10,
    public defense = 10,
  ) { }
  levelUp(): void { }
  special(enemy: SimpleFighter): void { }
  attack(enemy: SimpleFighter): void { }
  receiveDamage(amount: number): void { }
}

class S implements SimpleFighter {
  constructor(
    public lifePoints = 10,
    public strength = 10,
  ) { }
  attack(enemy: SimpleFighter): void { }
  receiveDamage(amount: number): void { }
}

const pve1 = new PVE(new Character(''), [new Monster()]);
const pve2 = new PVE(new F(), [new S()]);
