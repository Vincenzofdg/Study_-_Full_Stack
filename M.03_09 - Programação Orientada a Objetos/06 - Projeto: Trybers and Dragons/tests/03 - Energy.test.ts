describe('03 - Energy', () => {
  it('É possível criar uma variável com o tipo EnergyType e atribuir a ela o valor "mana"', () => {
    expect('Energy.mana').toCompile();
  });
  it('É possível criar uma variável com o tipo EnergyType e atribuir a ela o valor "stamina"', () => {
    expect('Energy.stamina').toCompile();
  });
  it("É possível criar uma variável com o tipo da interface Energy e atribuir a ela o valor { amount: 10, type_: 'stamina'}", () => {
    expect('Energy.1').toCompile();
  });
  it("É possível criar uma variável com o tipo da interface Energy e atribuir a ela o valor { amount: 45, type_: 'mana'}", () => {
    expect('Energy.2').toCompile();
  });
  it("Não é possível criar uma variável com o tipo da interface Energy sem atribuir a ela um amount", () => {
    expect('Energy.3').notToCompile();
  });
  it("Não é possível criar uma variável com o tipo da interface Energy sem atribuir a ela um type_", () => {
    expect('Energy.4').notToCompile();
  });
});
