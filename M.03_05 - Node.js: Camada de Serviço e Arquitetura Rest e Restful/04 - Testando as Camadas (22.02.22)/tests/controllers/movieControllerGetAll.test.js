const sinon = require('sinon');
const { expect } = require('chai');

const movieController = require('../../controllers/movieController');
const movieService = require('../../services/movieService');

describe('Busca todos os filmes do BD', () => {
  describe('quando não exite nenhum filme', () => {
    const response = {};
    const request = {};
    before(() => {
      request.body = {};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(movieService, 'getAll').resolves([]);
      // res.status(200).json({})
      // res.json()
    });
    after(() => {
      movieService.getAll.restore();
    });
    it('retorna um array', async () => {
      await movieController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it('retorna um array vazio', async () => {
      await movieController.getAll(request, response);
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
  describe('quando existe filmes criados', () => {
    const response = {};
    const request = {};
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(movieService, 'getAll').resolves([
        {
          id: 1,
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        },
      ]);
    });
    after(() => {
      movieService.getAll.restore();
    });
    it('retorna status 200', async () => {
      await movieController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it('retorna um array', async () => {
      await movieController.getAll(request, response);
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
});
