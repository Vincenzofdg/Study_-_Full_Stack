import Pizza, { PizzaSize } from './pizza';

export default class Margerita extends Pizza {
  extra: { desert: boolean } = { desert: false };

  constructor(size: PizzaSize) {
    super(size);
    this._ingredients.push('basil', 'cheese', 'olive', 'tomatoes');
    this._pricePerSize = this._pricePerSize.map((p) => ({
      ...p,
      price: p.price + 2.0,
    }));
    this.extra.desert = true;
  }
  public makePizza(): void {
    console.log(`Making Margerita's pizza with size ${this._size}`);
  }
  public printPrice(): void {
    console.log(
      `Price is: ${
        this._pricePerSize.find((p) => p.size === this._size)?.price
      } ${this._ingredients}`,
    );
  }
}
