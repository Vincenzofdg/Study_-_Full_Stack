// GAME ACTIONS SIMULATOR 

/*Parte I 
Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano,
atualizam status, e ao final, retornam os resultados da rodada. Para os próximos exercícios copie o código abaixo:*/
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = {
  mage,
  warrior,
  dragon
};

/*01 - Crie uma função que retorna o dano do dragão.
 * O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).*/
const attackDragon = (dragon) => {
  const minimo = 15;
  const { strength } = dragon; // Pegando o valor de strenght do objeto
  const dragonAttack = Math.floor((Math.random() * (strength - minimo + 1) + minimo));
  return `01 - Dano: ${dragonAttack}`;
};
console.log(attackDragon(dragon));

/*02 - Crie uma função que retorna o dano causado pelo warrior.
 * O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).*/
const attackWarrior = (warrior) => {
  const { strength } = warrior; // valor minimo
  const { weaponDmg } = warrior; // valor da arma
  const max = strength * weaponDmg;
  const warriorAttack = Math.floor((Math.random() * (strength + 1) + strength));
  return `02 - Dano: ${warriorAttack}`;
};
console.log(attackWarrior(warrior));

/*03 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
  * O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
  * A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de 
  dano recebe uma mensagem.
  (Ex: "Não possui mana suficiente") e a mana gasta é 0.*/
const attackMage = (mage) => {
  const { intelligence } = mage;
  const { mana } = mage;
  let Dano = 0;

  const Mana = mana;
  if (Mana < 15) Dano = 'Não possui mana suficiente';
  else Dano = Math.floor((Math.random() * ((intelligence * 2) - intelligence + 1) + intelligence));
  return {
    Dano,
    Mana
  };
};
console.log(attackMage(mage));

/*-------------------------------------------------------------------------------------------------------------------------------------*/

/*Parte II
Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções
que irão compor um objeto gameActions. O objeto será composto por ações do jogo e cada ação é por denifição uma HOF, pois neste caso, são
funções que recebem como parâmetro outra função.*/

/*01 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá
como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela
também deve atualizar o valor da chave damage do warrior.*/
/*02 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como
parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também
deve atualizar o valor das chaves damage e mana do mage.*/
/*03 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como
parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto
ela também deve atualizar o valor da chave damage do monstro.*/
/*04 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o
resultado final do turno.*/

const gameActions = {
  warriorTurn: (attackWarrior) => {
    const warriorDamage = attackWarrior(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
};

gameActions.warriorTurn(attackWarrior);
console.log(gameActions.warriorTurn)