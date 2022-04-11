export enum PizzaSize {
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  EXTRA_LARGE = 'EXTRA_LARGE',
}
interface IExtra {
  border: boolean;
  desert: boolean;
}

export default abstract class Pizza {
  protected _size: PizzaSize;
  protected _ingredients: string[];
  protected _pricePerSize: { size: PizzaSize; price: number }[];
  protected static _count: number = 0;
  // public extra: IExtra = { border: false, desert: true };
  constructor(size: PizzaSize) {
    this._size = size;
    this._ingredients = ['sauce'];
    this._pricePerSize = [
      { size: PizzaSize.MEDIUM, price: 25.0 },
      { size: PizzaSize.LARGE, price: 35.0 },
      { size: PizzaSize.EXTRA_LARGE, price: 40.0 },
    ];
    Pizza._count += 1;
  }
  static get getCountOrder(): number {
    return Pizza._count;
  }
  get pizzaSize(): PizzaSize {
    return this._size;
  }
  public abstract makePizza(): void;
  public printPrice(): void {
    console.log(
      `Price is: ${
        this._pricePerSize.find((p) => p.size === this._size)?.price
      }`,
    );
  }
}
