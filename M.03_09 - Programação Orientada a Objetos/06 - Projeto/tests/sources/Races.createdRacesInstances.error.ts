import Race from '../../src/Races';

let ok = true;
try {
  Race.createdRacesInstances();
} catch (err: any) {
  if (err.message === 'Not implemented') {
    ok = false;
  }
}

const result = () => ok;
