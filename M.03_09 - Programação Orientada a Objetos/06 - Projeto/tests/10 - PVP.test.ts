describe.skip('10 - Classe PVP', () => {
  it('A classe PVP existe e se pode ser criada uma nova instância, passando dois Characters lutadores', () => {
    expect('PVP.exists').toCompile();
  });
  it('A classe PVP pode ser utilizada onde a classe Battle é esperada, um personagem que chamou várias vezes o levelUp e possui melhores atributos tem maiores chances de vencer', () => {
    expect('PVP.LSP').toCompileAndBeEqualTo([1, -1]);
  });
  it('A classe PVP pode receber tanto dois Characters quanto duas instâncias de uma implementação diferente de Fighter', () => {
    expect('PVP.DIP').toCompile();
  });
});
