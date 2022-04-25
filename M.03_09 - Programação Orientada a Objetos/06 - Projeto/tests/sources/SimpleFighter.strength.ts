import { SimpleFighter } from '../../src/Fighter';

class f implements SimpleFighter {
  constructor(
    public lifePoints: 10,
  ) { }

  attack(enemy: SimpleFighter): void { }
  receiveDamage(amount: number) { }
};
