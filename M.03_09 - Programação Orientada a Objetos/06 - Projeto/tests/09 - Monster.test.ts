describe.skip('09 - Classe Monster', () => {
  it('A classe Monster existe', () => {
    expect('Monster.exists').toCompile();
  });
  it('A classe Monster implementa a interface SimpleFighter', () => {
    expect('Monster.implements').toCompile();
  });
  it('Um Monster possui um atributo lifePoints, que pode ser lido mas não pode ser setado', () => {
    expect('Monster.lifePoints').toCompile();
    expect('Monster.lifePoints.set').notToCompile();
  });
  it('Um Monster possui um atributo strength, que pode ser lido mas não pode ser setado', () => {
    expect('Monster.strength').toCompile();
    expect('Monster.strength.set').notToCompile();
  });
  it('Um Monster pode receber danos através do método receiveDamage, fazendo com que seus lifePoints caiam o valor do parâmetro attackPoints, devendo retornar -1 caso os lifePoints tenham chegado a 0 ou menos', () => {
    expect('Monster.receiveDamage').toCompile();
  });
  it('Um Monster pode atacar um Character, e o Character receberá dano entre o valor do atributo strength do Monster que ataca e este valor decrescido do valor do atributo defense do Character que defende', () => {
    expect('Monster.attack').toCompile();
  });
  it('Um Character pode atacar um Monster, e o Monster receberá de dano o valor do atributo strength do Character que o ataca', () => {
    expect('Monster.receiveAttack').toCompile();
  });
});
