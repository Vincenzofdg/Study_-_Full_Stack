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
      const previousLife = character.lifePoints;
      if (previousLife <= 0) break;
      monster.attack(character);
      res = monster.strength > previousLife + character.defense ? character.lifePoints <= 0 : character.lifePoints <= previousLife && (character.lifePoints >= previousLife - (monster.strength) || character.lifePoints == -1);
      if (!res) return false;
    }
  }
  return true;
};
