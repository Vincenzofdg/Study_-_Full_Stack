// 01. Crie uma classe abstrata Character que tenha os métodos abstratos `talk(): void` e `specialMove(): void`;
// 02. Crie a classe concreta MeleeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe;
// 03. Crie a classe concreta LongRangeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe;
// 04. Crie uma função que receba como parâmetro character: Character e chame os métodos talk e specialMove para apresentar o personagem.

abstract class Character {
  public abstract talk(): void
  public abstract specialMove(): void
}

class MeleeCharacter extends Character {
  private _name: string;
  private _spacial: string;

  constructor(name: string, moviment: string) {
    super();
    this._name = name;
    this._spacial = moviment;
  }

  public talk(): void {
    console.log(`Hi my name is ${this._name}`);
  }
  public specialMove(): void {
    console.log(`${this._name} uses ${this._spacial}`);
  }
}

class LongRangeCharacter extends Character {
  private _name: string;
  private _spacial: string;

  constructor(name: string, moviment: string) {
    super();
    this._name = name;
    this._spacial = moviment;
  }

  public talk(): void {
    console.log(`Hi my name is ${this._name}`);
  }
  public specialMove(): void {
    console.log(`${this._name} uses ${this._spacial}`);
  }
}

const hero = new MeleeCharacter('Hero', 'Ataque de Frescura')
const villain = new LongRangeCharacter('Villain', 'Bloqueio de Frescura')

const action = (character: Character) => {
  character.talk();
  character.specialMove();
}

action(hero);
action(villain);