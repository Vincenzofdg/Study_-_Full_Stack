import { Halfling } from '../../src/Races';

const result = () => {
  const r = [];
  const h1 = new Halfling('', 2);
  r.push(Halfling.createdRacesInstances());
  const h2 = new Halfling('', 2);
  r.push(Halfling.createdRacesInstances());
  const h3 = new Halfling('', 2);
  r.push(Halfling.createdRacesInstances());
  return r;
};
