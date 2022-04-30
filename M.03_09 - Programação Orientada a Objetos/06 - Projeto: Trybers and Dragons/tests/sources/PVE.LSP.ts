import Battle, { PVE } from '../../src/Battle';
import Character from '../../src/Character';
import Monster from '../../src/Monster';

const fight = (battle: Battle) => battle.fight();

const result = () => {
  const player1 = new Character('');
  for (let i = 0; i < 500; i++) player1.levelUp();
  const monster = new Monster();
  const pve1 = new PVE(player1, [monster]);

  const player2 = new Character('');
  const monsters: Monster[] = [];
  for (let i = 0; i < 500; i++) monsters.push(new Monster());
  const pve2 = new PVE(player2, monsters);

  return [fight(pve1), fight(pve2)];
};
