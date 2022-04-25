import Race from '../../src/Races';

class RaceChild extends Race {
  get maxLifePoints(): number {
    return 99;
  }
}

const race = new RaceChild('', 80);
race.dexterity;
