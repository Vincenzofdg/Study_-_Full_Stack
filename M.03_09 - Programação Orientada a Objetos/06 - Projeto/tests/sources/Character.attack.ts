import Character from '../../src/Character';

const result = () => {
  for (let j = 0; j < 1000; j++) {
    const c1 = new Character('');
    const c2 = new Character('');
    c2.levelUp();
    c2.levelUp();

    let res = true;

    for (let i = 0; i < 100; i++) {
      const previousLife = c1.lifePoints;
      if (previousLife <= 0) break;
      c2.attack(c1);
      res = c2.strength > previousLife + c1.defense ? c1.lifePoints <= 0 : c1.lifePoints <= previousLife && (c1.lifePoints >= previousLife - (c2.strength) || c1.lifePoints == -1);
      if (!res) return false;
    }
  }
  return true;
};
