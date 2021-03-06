type Slice = 4 | 6 | 8;

export interface IPizza {
  _flavor: string,
  _slice: Slice
}

export class Pizza implements IPizza {
  _flavor: string;
  _slice: Slice;
  constructor(flavor: string, slice: Slice) {
    this._flavor = flavor;
    this._slice = slice;
  };

  log(): void { 
    const {_slice: slice, _flavor: flavor} = this;
    console.log(`Pizza sabor ${flavor} de ${slice} fatias`)
  };
};

const pizza01 = new Pizza('Calabresa', 8).log();
const pizza02 = new Pizza('Marguerita', 6).log();
const pizza03 = new Pizza('Nutela', 4).log();
