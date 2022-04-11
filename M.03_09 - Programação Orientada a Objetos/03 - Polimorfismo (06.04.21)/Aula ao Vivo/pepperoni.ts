import Pizza, { PizzaSize } from './pizza';

export default class Pepperoni extends Pizza {
  extra: { border: boolean } = { border: false };
  constructor(size: PizzaSize) {
    super(size);
    this._ingredients.push('pepperoni', 'cheese');
    this._pricePerSize = this._pricePerSize.map((p) => ({
      ...p,
      price: p.price + 5.0,
    }));
    this.extra.border = true;
  }
  public makePizza(): void {
    console.log(`Making Pepperoni's pizza with size ${this._size}`);
  }
  public printPrice(): void {
    console.log(
      `Price is: ${
        this._pricePerSize.find((p) => p.size === this._size)?.price
      } ${this._ingredients}`,
    );
  }
  public static showOff(): void {
    console.log('Peppero the BEST PIZZA EVERRRR');
  }
}
