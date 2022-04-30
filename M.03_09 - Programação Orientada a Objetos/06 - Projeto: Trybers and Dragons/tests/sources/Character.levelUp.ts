import Character from '../../src/Character';

type properties = {
  lifePoints: number;
  energy: {
    amount: number;
  };
  strength: number;
  dexterity: number;
  defense: number;
};

const checkCharacterProperties = (prev: properties, curr: Character): boolean => {
  if (curr.energy.amount !== 10) return false;
  if (prev.strength >= curr.strength || prev.strength + 10 < curr.strength) return false;
  if (prev.dexterity >= curr.dexterity || prev.dexterity + 10 < curr.dexterity) return false;
  if (prev.defense >= curr.defense || prev.defense + 10 < curr.defense) return false;
  if ((prev.lifePoints >= curr.lifePoints && curr.lifePoints < curr.race.maxLifePoints) || prev.lifePoints + 10 < curr.lifePoints || curr.race.maxLifePoints < curr.lifePoints) return false;

  return true;
};

const result = () => {
  let res = true;
  const char = new Character('');
  for (let i = 0; i < 100; i++) {
    const currentProperties = {
      lifePoints: char.lifePoints,
      energy: {
        amount: char.energy.amount
      },
      strength: char.strength,
      dexterity: char.dexterity,
      defense: char.defense
    };
    char.levelUp();
    if (!checkCharacterProperties(currentProperties, char)) {
      res = false;
      break;
    }
  }
  return res;
};
