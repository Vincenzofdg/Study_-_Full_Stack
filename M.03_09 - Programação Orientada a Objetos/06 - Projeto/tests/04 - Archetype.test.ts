describe('04 - Classe Archetype', () => {
  it('A classe Archetype existe', () => {
    expect('Archetype.exists').toCompile();
  });
  it('A classe Archetype é abstrata', () => {
    expect('Archetype.abstract').notToCompile();
  });
  it('O parâmetro name da classe Archetype pode ser lido', () => {
    expect('Archetype.name').toCompile();
  });
  it('O parâmetro name da classe Archetype não pode ser alterado', () => {
    expect('Archetype.name.set').notToCompile();
  });
  it('O parâmetro special da classe Archetype pode ser lido', () => {
    expect('Archetype.special').toCompile();
  });
  it('O parâmetro cost da classe Archetype pode ser lido', () => {
    expect('Archetype.cost').toCompile();
  });
  it('O método energyType retorna um EnergyType', () => {
    expect('Archetype.energyType').toCompile();
  });
});
