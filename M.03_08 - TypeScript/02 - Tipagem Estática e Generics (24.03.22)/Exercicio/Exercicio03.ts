type Slice = 4 | 6 | 8;

class Pizza {
  _flavor: string;
  _slice: Slice;
  constructor(flavor: string, slice: Slice) {
    this._flavor = flavor;
    this._slice = slice;
  };

  created(): void { 
    const {_slice: slice, _flavor: flavor} = this;
    console.log(`Pizza sabor ${flavor} de ${slice} fatias`)
  };
};

const pizza01 = new Pizza('Calabresa', 8).created();
const pizza02 = new Pizza('Marguerita', 6).created();
const pizza03 = new Pizza('Nutela', 4).created();
