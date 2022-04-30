import Archetype from '../../src/Archetypes';

class ArchetypeChild extends Archetype {
  private $energyType: 'mana' = 'mana';

  get maxLifePoints(): number {
    return 99;
  }

  get energyType() {
    return this.$energyType;
  }
}

const archetype = new ArchetypeChild('');
archetype.name = 'test';
