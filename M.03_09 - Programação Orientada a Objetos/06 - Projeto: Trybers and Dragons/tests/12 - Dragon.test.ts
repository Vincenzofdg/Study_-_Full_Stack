describe.skip('12 - Classe Dragon', () => {
  it('A classe Dragon existe', () => {
    expect('Dragon.exists').toCompile();
  });
  it('A classe Dragon herda de Monster', () => {
    expect('Dragon.extends').toCompile();
  });
  it('Um Dragon deve ter 999 no valor do atributo lifePoints', () => {
    expect('Dragon.lifePoints').toCompile();
  });
});
