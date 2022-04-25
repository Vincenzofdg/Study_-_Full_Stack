import Battle, { PVP } from '../../src/Battle';
import Character from '../../src/Character';

const fight = (battle: Battle) => battle.fight();

const result = () => {
  const player1 = new Character('');
  for (let i = 0; i < 500; i++) player1.levelUp();
  const player2 = new Character('');
  const pvp1 = new PVP(player1, player2);

  const player3 = new Character('');
  for (let i = 0; i < 500; i++) player3.levelUp();
  const player4 = new Character('');
  const pvp2 = new PVP(player4, player3);

  return [fight(pvp1), fight(pvp2)];
};
