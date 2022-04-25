import Race from './Race';

export default class Dwarf extends Race {
  private _hp: number;
  protected static _instances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instances += 1;
    this._hp = 80;
  }

  public static createdRacesInstances(): number { return this._instances; }

  public get maxLifePoints(): number { return this._hp; }
}