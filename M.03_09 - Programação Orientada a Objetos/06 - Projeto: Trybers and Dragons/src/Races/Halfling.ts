import Race from './Race';

export default class Halfling extends Race {
  private _hp: number;
  protected static _instances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instances += 1;
    this._hp = 60;
  }

  public static createdRacesInstances(): number { return this._instances; }

  public get maxLifePoints(): number { return this._hp; }
}