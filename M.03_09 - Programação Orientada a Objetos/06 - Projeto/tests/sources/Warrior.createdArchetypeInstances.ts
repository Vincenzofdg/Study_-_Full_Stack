import { Warrior } from '../../src/Archetypes';

const result = () => {
  const r = [];
  const w1 = new Warrior('');
  r.push(Warrior.createdArchetypeInstances());
  const w2 = new Warrior('');
  r.push(Warrior.createdArchetypeInstances());
  const w3 = new Warrior('');
  r.push(Warrior.createdArchetypeInstances());
  return r;
};
