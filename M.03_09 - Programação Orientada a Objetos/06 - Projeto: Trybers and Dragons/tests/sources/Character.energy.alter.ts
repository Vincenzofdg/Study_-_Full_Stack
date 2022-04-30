import Character from '../../src/Character';

const result = () => {
  const c = new Character('');
  const e = c.energy;
  e.amount -= 5;
  return c.energy.amount !== e.amount;
};
