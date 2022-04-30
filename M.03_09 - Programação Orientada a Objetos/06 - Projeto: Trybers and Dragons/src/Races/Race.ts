export default abstract class Race {
  // Podem ser lidos mas não podem ser alterados
  constructor(
    readonly name: string,
    readonly dexterity: number,
  ) { }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number;
}