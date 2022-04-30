import Race from './Race';

export default class Orc extends Race {
  private _hp: number;
  protected static _instances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._instances += 1;
    this._hp = 74;
  }

  public static createdRacesInstances(): number { return this._instances; }

  public get maxLifePoints(): number { return this._hp; }
}