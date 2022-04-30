import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  protected static _instances = 0;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._instances += 1;
  }
  
  public static createdArchetypeInstances(): number { return this._instances; }

  public get energyType(): EnergyType { return this._energyType; }
}