import Character from '../../src/Character';
import Monster from '../../src/Monster';

const result = () => {
  for (let j = 0; j < 1000; j++) {
    const monster = new Monster();
    const character = new Character('');
    character.levelUp();
    character.levelUp();

    let res = true;

    for (let i = 0; i < 100; i++) {
      const previousLife = monster.lifePoints;
      if (previousLife <= 0) break;
      character.attack(monster);
      res = character.strength > previousLife ? monster.lifePoints <= 0 : monster.lifePoints <= previousLife && (monster.lifePoints >= previousLife - (character.strength) || monster.lifePoints == -1);
      if (!res) return false;
    }
  }
  return true;
};
