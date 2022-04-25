import Character from '../../src/Character';

const c1 = new Character('');
const result = () => {
  let res = true;
  for (let i = 0; i < 3; i++) {
    const previousLife = c1.lifePoints;
    if (previousLife <= 0) break;
    const life = c1.receiveDamage(10 ** i);
    res = 10 ** i > previousLife + c1.defense ? life === -1 : life <= previousLife && life >= previousLife - (10 ** i);
    if (!res) break;
  }
  return res;
};
