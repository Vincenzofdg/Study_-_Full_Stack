import { Item } from "./interfaces";

export default class Race {
    private _height: number;
    protected _languages: string[];
    private _inventory: Item[];

    constructor(
        private _name: string,
        min: number = 0.6,
        max: number = 2.1,
    ) {
        this._height = this.getRandomHeight(min, max);
        this._languages = ['westron'];
        this._inventory = [{ name: 'rock', weight: 0.1 }];
    }

    get name() { return this._name; }
    get height() { return this._height; }
    get languages() { return this._languages; }
    get inventory() { return this._inventory; }

    public pickUpItem(item: Item): void {
        this._inventory.push(item);      
        console.log(`Adicionado o item `, item.name);
    }

    private getRandomHeight(min: number, max: number) {
        return parseFloat(
            (Math.random() * (max - min) + min).toFixed(2)
        );
    }

    public toString(): string {
        return `${this._name} speaks ${this._languages} and has height ${this._height}`;
    }
}

export class NovaClasseDeRace {
    
}