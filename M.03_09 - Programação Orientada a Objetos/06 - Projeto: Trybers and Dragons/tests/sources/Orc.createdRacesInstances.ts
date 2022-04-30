import { Orc } from '../../src/Races';

const result = () => {
  const r = [];
  const o1 = new Orc('', 2);
  r.push(Orc.createdRacesInstances());
  const o2 = new Orc('', 2);
  r.push(Orc.createdRacesInstances());
  const o3 = new Orc('', 2);
  r.push(Orc.createdRacesInstances());
  return r;
};
