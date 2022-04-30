describe('02 - Classes que herdam de Race', () => {
  it('A classe Dwarf existe', () => {
    expect('Dwarf.exists').toCompile();
  });
  it('A classe Dwarf herda de Race', () => {
    expect('Dwarf.extends').toCompile();
  });
  it('O parâmetro name da classe Dwarf pode ser lido', () => {
    expect('Dwarf.name').toCompile();
  });
  it('O parâmetro dexterity da classe Dwarf pode ser lido', () => {
    expect('Dwarf.dexterity').toCompile();
  });
  it('O método createdRacesInstances deve retornar o número correto de instâncias criadas da classe Dwarf', () => {
    expect('Dwarf.createdRacesInstances').toCompileAndBeEqualTo([1, 2, 3]);
  });
  it('O parâmetro maxLifePoints existe e é igual a 80', () => {
    expect('Dwarf.maxLifePoints').toCompileAndBeEqualTo(80);
  });

  it('A classe Elf existe', () => {
    expect('Elf.exists').toCompile();
  });
  it('A classe Elf herda de Race', () => {
    expect('Elf.extends').toCompile();
  });
  it('O parâmetro name da classe Elf pode ser lido', () => {
    expect('Elf.name').toCompile();
  });
  it('O parâmetro dexterity da classe Elf pode ser lido', () => {
    expect('Elf.dexterity').toCompile();
  });
  it('O método createdRacesInstances deve retornar o número correto de instâncias criadas da classe Elf', () => {
    expect('Elf.createdRacesInstances').toCompileAndBeEqualTo([1, 2, 3]);
  });
  it('O parâmetro maxLifePoints existe e é igual a 99', () => {
    expect('Elf.maxLifePoints').toCompileAndBeEqualTo(99);
  });

  it('A classe Halfling existe', () => {
    expect('Halfling.exists').toCompile();
  });
  it('A classe Halfling herda de Race', () => {
    expect('Halfling.extends').toCompile();
  });
  it('O parâmetro name da classe Halfling pode ser lido', () => {
    expect('Halfling.name').toCompile();
  });
  it('O parâmetro dexterity da classe Halfling pode ser lido', () => {
    expect('Halfling.dexterity').toCompile();
  });
  it('O método createdRacesInstances deve retornar o número correto de instâncias criadas da classe Halfling', () => {
    expect('Halfling.createdRacesInstances').toCompileAndBeEqualTo([1, 2, 3]);
  });
  it('O parâmetro maxLifePoints existe e é igual a 60', () => {
    expect('Halfling.maxLifePoints').toCompileAndBeEqualTo(60);
  });

  it('A classe Orc existe', () => {
    expect('Orc.exists').toCompile();
  });
  it('A classe Orc herda de Race', () => {
    expect('Orc.extends').toCompile();
  });
  it('O parâmetro name da classe Orc pode ser lido', () => {
    expect('Orc.name').toCompile();
  });
  it('O parâmetro dexterity da classe Orc pode ser lido', () => {
    expect('Orc.dexterity').toCompile();
  });
  it('O método createdRacesInstances deve retornar o número correto de instâncias criadas da classe Orc', () => {
    expect('Orc.createdRacesInstances').toCompileAndBeEqualTo([1, 2, 3]);
  });
  it('O parâmetro maxLifePoints existe e é igual a 74', () => {
    expect('Orc.maxLifePoints').toCompileAndBeEqualTo(74);
  });
});
