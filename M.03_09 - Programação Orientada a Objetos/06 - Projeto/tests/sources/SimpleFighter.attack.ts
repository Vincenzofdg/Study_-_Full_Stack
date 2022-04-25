import { SimpleFighter } from '../../src/Fighter';

class f implements SimpleFighter {
  constructor(
    public lifePoints: 100,
    public strength: 10,
  ) { }

  receiveDamage(amount: number) { }
};
