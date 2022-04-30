describe('08 - Interface SimpleFighter', () => {
  it('A interface SimpleFighter existe', () => {
    expect('SimpleFighter.exists').toCompile();
  });
  it('A interface SimpleFighter possui o atributo lifePoints', () => {
    expect('SimpleFighter.lifePoints').notToCompile();
  });
  it('A interface SimpleFighter possui o atributo strength', () => {
    expect('SimpleFighter.strength').notToCompile();
  });
  it('A interface SimpleFighter possui o método attack, que recebe um enemy do tipo SimpleFighter', () => {
    expect('SimpleFighter.attack').notToCompile();
  });
  it('A interface SimpleFighter possui o método receiveDamage, que recebe um attackPoints do tipo number', () => {
    expect('SimpleFighter.receiveDamage').notToCompile();
  });
});
