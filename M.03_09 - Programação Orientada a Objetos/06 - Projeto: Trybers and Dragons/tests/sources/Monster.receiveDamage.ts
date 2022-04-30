import Monster from '../../src/Monster';

const monster = new Monster();
const result = () => {
  let res = true;
  for (let i = 0; i < 3; i++) {
    const previousLife = monster.lifePoints;
    if (previousLife <= 0) break;
    const life = monster.receiveDamage(10 ** i);
    res = 10 ** i > previousLife ? life === -1 : life <= previousLife && life >= previousLife - (10 ** i);
    if (!res) break;
  }
  return res;
};
