const sinon = require('sinon');
const { expect } = require('chai');

const movieModel = require('../../models/movieModel');

const movieService = require('../../services/movieService');

describe('Busca todos os filmes do BD', () => {
  describe('quando não exite nenhum filme', () => {
    before(() => {
      sinon.stub(movieModel, 'getAll').resolves([]);
    });
    after(() => {
      movieModel.getAll.restore();
    });
    it('retorna um array', async () => {
      const result = await movieService.getAll();

      expect(result).to.be.an('array');
    });
    it('retorna um array vazio', async () => {
      const result = await movieService.getAll();

      expect(result).to.be.empty;
    });
  });
  describe('quando existe filmes criados', () => {
    before(() => {
      sinon.stub(movieModel, 'getAll').resolves([
        {
          id: 1,
          title: 'Example Movie',
          directed_by: 'Jane Dow',
          release_year: 1999,
        },
      ]);
    });
    after(() => {
      movieModel.getAll.restore();
    });
    it('retorna um array', async () => {
      const result = await movieService.getAll();
      expect(result).to.be.an('array');
    });
    it('o array não estar vazio', async () => {
      const result = await movieService.getAll();
      expect(result).to.be.not.empty;
    });
    it('o array possui itens do tipo objeto', async () => {
      const [item] = await movieService.getAll();
      expect(item).to.be.an('object');
    });
    it('o item ter as propriedade "id", "title", "releaseYear" e directedBy', async () => {
      const [item] = await movieService.getAll();

      expect(item).to.include.all.keys(
        'id',
        'title',
        'releaseYear',
        'directedBy',
      );
    });
  });
});
