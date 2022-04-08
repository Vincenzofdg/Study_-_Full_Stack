class Book {
  private _id: string;
  private _title: string;
  private _salePrice: number;
  private _cost: number;
  
  constructor(id: string, title: string, cost: number, salePrice?: number) {
    this._id = id;
    this._title = title;
    if (salePrice) {
      this._salePrice = salePrice;
    } else {
      this._salePrice = cost;
    }
    this._cost = cost;
  }

  get id() {
    return this._id;
  }

  set id(id: string) {
    if (this.isIdValid(id)) {
      this._id = id;
    }
  }

  get title() {
    return this._title;
  }

  get salePrice() {
    return this._salePrice;
  }

  set salePrice(price: number) {
    if (price < this._cost) {
      console.error('Preço não pode ser menor que o custo.');
    } else {
      this._salePrice = price;
    }
  }

  get profit(): number {
    return this._salePrice - this._cost;
  }

  public setMinimumSalePrice(profitMargin: number): number {
    const newPrice = this._cost * (1 + profitMargin/100);

     return this._salePrice = newPrice;
  }

  private isIdValid(id: string): boolean {
    return false;
  }

  public toString(): string {
    return `Livro: ${this._title}, Preço: ${this._salePrice}`;
  }
}

let a = new Object();

const book1 = new Book('00001', 'Dune', 38.00, 50.00);
const book2 = new Book('00002', 'Harry Potter', 32.00, 40.00);

console.log(`${book2}`);
console.log('Lucro do livro 2:', book2.profit);
console.log(
  'Setando o valor do livro para garantit 20% de lucro',
  book2.setMinimumSalePrice(20)
);
console.log(book2);