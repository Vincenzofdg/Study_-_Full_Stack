import { player1, player2, player3 } from '../../src';
import Character from '../../src/Character';

const func = (players: Character[]) => players.map(p => p.lifePoints);
const result = () => {
  const res = func([player1, player2, player3]);
  return res[0] > player1.race.maxLifePoints / 2
    && res[1] == player2.race.maxLifePoints / 2
    && res[2] == player3.race.maxLifePoints / 2;
};
