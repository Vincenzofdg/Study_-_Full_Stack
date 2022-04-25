import { runBattles, pve, pvp, player1, player2, player3, monster1, monster2 } from '../../src';
import Battle from '../../src/Battle';
import Fighter from '../../src/Fighter';

class B extends Battle { }
class F implements Fighter {
  constructor(
    public lifePoints = 10,
    public strength = 10,
    public defense = 10,
  ) { }
  levelUp(): void { }
  special(enemy: Fighter): void { }
  attack(enemy: Fighter): void { }
  receiveDamage(amount: number): void { }
}
const b = new B(new F());

const result = () => {
  runBattles([pve, pvp, b]);
  let res = true;
  if (player1.lifePoints !== -1) {
    if (monster1.lifePoints !== -1 && monster2.lifePoints !== -1) res = false;
  }
  if (player2.lifePoints !== -1 && player3.lifePoints !== -1) res = false;
  return res;
};
