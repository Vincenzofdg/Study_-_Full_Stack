const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../models/connection');

const movieModel = require('../../models/movieModel');

describe('Busca todos os filmes do BD', () => {
  describe('quando não exite nenhum filme', () => {
    before(() => {
      const resultadoExecute = [[]];
      connection.execute;
      sinon.stub(connection, 'execute').resolves(resultadoExecute);
    });
    after(() => {
      connection.execute.restore();
    });
    it('retorna um array', async () => {
      const result = await movieModel.getAll();
      expect(result).to.be.an('array');
    });
    it('retorna um array vazio', async () => {
      const result = await movieModel.getAll();

      expect(result).to.be.empty;
    });
  });

  describe('quando existe filmes criados', () => {
    before(() => {
      const returnExecute = [
        [
          {
            id: 1,
            title: 'Exemplo Filme',
            directedBy: 'Virginia',
            releaseYear: 1999,
          },
        ],
      ];
      sinon.stub(connection, 'execute').resolves(returnExecute);
    });
    after(() => {
      connection.execute.restore();
    });
    it('retorna um array', async () => {
      const result = await movieModel.getAll();
      expect(result).to.be.an('array');
    });
    it('o array não estar vazio', async () => {
      const result = await movieModel.getAll();
      expect(result).to.be.not.empty;
    });
    it('o array possui itens do tipo objeto', async () => {
      const [item] = await movieModel.getAll();
      expect(item).to.be.an('object');
    });
    it('o item ter as propriedade "id", "title", "releaseYear" e directedBy', async () => {
      const [item] = await movieModel.getAll();
      expect(item).to.include.all.keys(
        'id',
        'title',
        'releaseYear',
        'directedBy',
      );
    });
  });
});
