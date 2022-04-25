import { Elf } from '../../src/Races';

const result = () => {
  const r = [];
  const e1 = new Elf('', 2);
  r.push(Elf.createdRacesInstances());
  const e2 = new Elf('', 2);
  r.push(Elf.createdRacesInstances());
  const e3 = new Elf('', 2);
  r.push(Elf.createdRacesInstances());
  return r;
};
