describe.skip('13 - Arquivo index', () => {
  it('Crie 3 objetos do tipo Character e os exporte no arquivo index como player1, player2 e player3; Rode o método levelUp algumas vezes no player1', () => {
    expect('index.characters').toCompileAndBeEqualTo(true);
  });
  it('Crie 2 objetos do tipo Monster, sendo o segundo um Dragon, e os exporte no arquivo index como monster1, monster2', () => {
    expect('index.monsters').toCompile();
  });
  it('Crie um objeto do tipo PVP (com os Characters player2 e player3) e o exporte no arquivo index como pvp; NÃO execute o método pvp.fight', () => {
    expect('index.pvp').toCompile();
  });
  it('Crie um objeto do tipo PVE (com o Character player1 e com os Monsters monster1 e monster2) e o exporte no arquivo index como pve; NÃO execute o método pve.fight', () => {
    expect('index.pve').toCompile();
  });
  it('Crie uma função chamada runBattles, que recebe um array de Battles e chama em seu interior o método battle.fight', () => {
    expect('index.OCP').toCompileAndBeEqualTo(true);
  });
});
