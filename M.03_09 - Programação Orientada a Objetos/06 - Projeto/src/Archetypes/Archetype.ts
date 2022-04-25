import { EnergyType } from '../Energy';

export default abstract class Archetype {
  constructor(
    readonly name: string,
    readonly special: number = 0,
    readonly cost: number = 0,
  ) { }

  public get getName() { return this.name; }

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get energyType(): EnergyType;
}
