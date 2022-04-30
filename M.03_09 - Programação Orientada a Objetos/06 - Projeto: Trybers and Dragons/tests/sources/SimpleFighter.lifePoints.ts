import { SimpleFighter } from '../../src/Fighter';

class f implements SimpleFighter {
  constructor(
    public strength: 10,
  ) { }

  attack(enemy: SimpleFighter): void { }
  receiveDamage(amount: number) { }
};
