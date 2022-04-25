const itIf = (condition: boolean) => condition ? it : it.skip;

describe('06 - Interface Fighter', () => {
  it('A interface Fighter existe', () => {
    expect('Fighter.exists').toCompile();
  });
  it('A interface Fighter pode ser implementada corretamente', () => {
    expect('Fighter.implemented').toCompile();
  });
  it('A interface Fighter possui o atributo lifePoints', () => {
    expect('Fighter.lifePoints').notToCompile();
  });
  it('A interface Fighter possui o atributo strength', () => {
    expect('Fighter.strength').notToCompile();
  });
  it('A interface Fighter possui o atributo defense', () => {
    expect('Fighter.defense').notToCompile();
  });
  it('A interface Fighter possui o método attack, que recebe um enemy do tipo Fighter', () => {
    expect('Fighter.attack').notToCompile();
  });
  it('A interface Fighter possui o método special, que recebe um enemy do tipo Fighter', () => {
    expect('Fighter.special').notToCompile();
  });
  it('A interface Fighter possui o método receiveDamage, que recebe um attackPoints do tipo number', () => {
    expect('Fighter.receiveDamage').notToCompile();
  });
  it('A interface Fighter possui o método levelUp, que não recebe parâmetros nem retorna nada', () => {
    expect('Fighter.levelUp').notToCompile();
  });
});
