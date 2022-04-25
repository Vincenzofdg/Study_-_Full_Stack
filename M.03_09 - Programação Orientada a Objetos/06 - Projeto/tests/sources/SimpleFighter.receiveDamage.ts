import { SimpleFighter } from '../../src/Fighter';

class f implements SimpleFighter {
  constructor(
    public lifePoints: 10,
    public strength: 10,
  ) { }

  attack(enemy: SimpleFighter): void { }
};
