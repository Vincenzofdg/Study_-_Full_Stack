import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _dexterity: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;
  private _maxLifePoints: number;

  constructor(name: string) {
    this._dexterity = 10;
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Math.floor(Math.random() * 10 + 1);
    this._defense = Math.floor(Math.random() * 10 + 1);
    this._energy = {
      type_: this._archetype.energyType,
      amount: Math.floor(Math.random() * 10 + 1),
    };
  }

  // Acessando as propriedades... nao se usa o readonly pois iremos alterar valores 
  public get race() { return this._race; }
  public get archetype() { return this._archetype; }
  public get lifePoints() { return this._lifePoints; }
  public get strength() { return this._strength; }
  public get defense() { return this._defense; }
  public get dexterity() { return this._dexterity; }
  public get energy() { 
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: Fighter): void { enemy.receiveDamage(this._strength); }

  levelUp(): void {
    this._maxLifePoints += Math.floor(Math.random() * 10 + 1);
    this._strength += Math.floor(Math.random() * 10 + 1);
    this._dexterity += Math.floor(Math.random() * 10 + 1);
    this._defense += Math.floor(Math.random() * 10 + 1);

    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    this._energy.amount -= 2;
    const fireBall = this.strength + Math.floor(Math.random() * 5 + 1);
    enemy.receiveDamage(fireBall);
  }
}

export default Character;