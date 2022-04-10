import { Item } from "./interfaces";
import Race from "./race";

export default class Hobbit extends Race {
    constructor(
        name: string,
        private _stealth: number,
        private _maxLoad: number,
    ) {
        super(name, 0.6, 1.2);
        this._languages.push('hobbitês')
    }

    public pickUpItem(item: Item): void {
        const currentLoad = this.inventory.reduce(
            (acc, curr) => acc + curr.weight,
            0,
        );

        if (currentLoad + item.weight <= this._maxLoad) {
            super.pickUpItem(item);
        } else {
            console.log(`Inventory is full.`);
        }
    }
}