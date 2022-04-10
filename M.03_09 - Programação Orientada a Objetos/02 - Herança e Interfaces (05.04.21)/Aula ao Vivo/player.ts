import { IPartyMember, IPlayer, Item } from "./interfaces";
import Race from "./race";

export default class Player<T extends IPlayer> implements IPlayer, IPartyMember {
    constructor(
        private _hp: number,
        private _mp: number,
        private _player: T,
    ) { }

    attack(): void {
        throw new Error("Method not implemented.");
    }

    pickUpItem(item: Item): void {
        this._player.pickUpItem(item);
    }
}