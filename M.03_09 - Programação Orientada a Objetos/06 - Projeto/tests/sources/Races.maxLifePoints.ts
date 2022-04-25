import Race, * as Races from '../../src/Races';

class RaceChild extends Race {
  get maxLifePoints(): number {
    return 99;
  }
}
const race = new RaceChild('Aloha', 80);
race.maxLifePoints
