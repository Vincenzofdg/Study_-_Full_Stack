import Fighter from '../../src/Fighter';

class f implements Fighter {
  constructor(
    public strength: 10,
    public defense: 10,
  ) { }

  attack(enemy: Fighter) { }
  receiveDamage(amount: number) { }
  levelUp(): void { }
  special(enemy: Fighter): void { }
};
