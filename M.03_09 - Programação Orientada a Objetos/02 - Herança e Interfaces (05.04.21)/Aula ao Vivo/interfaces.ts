export interface Item {
    name: string,
    weight: number,
}

export interface IPartyMember {
    attack(): void;
}

export interface IPlayer {
    pickUpItem(item: Item): void;
}