import Fighter from '../../src/Fighter';

class f implements Fighter {
  constructor(
    public lifePoints: 100,
    public strength: 10,
    public defense: 10,
  ) { }

  receiveDamage(amount: number) { }
  attack(enemy: Fighter): void { }
  levelUp(): void { }
};
