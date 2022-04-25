import { Dwarf } from '../../src/Races';

const result = () => {
  const r = [];
  const d1 = new Dwarf('', 2);
  r.push(Dwarf.createdRacesInstances());
  const d2 = new Dwarf('', 2);
  r.push(Dwarf.createdRacesInstances());
  const d3 = new Dwarf('', 2);
  r.push(Dwarf.createdRacesInstances());
  return r;
};
