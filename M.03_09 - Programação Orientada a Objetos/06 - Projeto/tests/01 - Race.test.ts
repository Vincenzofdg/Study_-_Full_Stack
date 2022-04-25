describe.skip('01 - Classe Race', () => {
  it('A classe Race existe', () => {
    expect('Races.exists').toCompile();
  });
  it('A classe Race é abstrata', () => {
    expect('Races.abstract').notToCompile();
  });
  it('O método maxLifePoints da classe Race é abstrato', () => {
    expect('Races.maxLifePoints.abstract').notToCompile();
  });
  it('O parâmetro name da classe Race pode ser lido', () => {
    expect('Races.name').toCompile();
  });
  it('O parâmetro name da classe Race não pode ser alterado', () => {
    expect('Races.name.set').notToCompile();
  });
  it('O parâmetro dexterity da classe Race pode ser lido', () => {
    expect('Races.dexterity').toCompile();
  });
  it('O parâmetro dexterity da classe Race não pode ser setado', () => {
    expect('Races.dexterity').toCompile();
  });
  it('O método maxLifePoints retorna um valor numérico', () => {
    expect('Races.maxLifePoints').toCompile();
  });
  it('O método createdRacesInstances deve existir e ser estático', () => {
    expect('Races.createdRacesInstances').toCompile();
  });
  it('O método createdRacesInstances deve levantar um erro "Not implemented"', () => {
    expect('Races.createdRacesInstances.error').toCompileAndBeEqualTo(false);
  });
});
