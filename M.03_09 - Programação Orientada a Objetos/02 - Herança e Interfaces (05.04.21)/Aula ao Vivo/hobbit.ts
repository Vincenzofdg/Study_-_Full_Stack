import { Item } from "./interfaces";
import Race from "./race";

// Herda da Classe base Race
// O que for private da classe Race a classe Hobbit nao tera visibilidade, mas exestirá
export default class Hobbit extends Race {
    constructor(name: string, private _stealth: number, private _maxLoad: number) {
        super(name, 0.6, 1.2); // super é usado para herdar atributos da classe pai
        this._languages.push('hobbitês')
    }

    public pickUpItem(item: Item): void {
        // this.inventory pode ser chamado pois na classe Race temos um get inventory()
        const { inventory, _maxLoad } = this
        const currentLoad = inventory.reduce((acc, curr) => acc + curr.weight, 0);

        if (currentLoad + item.weight <= _maxLoad) super.pickUpItem(item);

        console.log(`Inventory is full.`);
    }
}