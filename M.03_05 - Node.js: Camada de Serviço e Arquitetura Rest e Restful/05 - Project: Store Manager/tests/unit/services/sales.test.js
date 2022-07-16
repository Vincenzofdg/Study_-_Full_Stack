const { expect } = require('chai');
const sinon = require('sinon');

const service = require('../../../services/salesService');
const model = require('../../../models/salesModel');

describe('/sales (getAll)', () => {
  it('Pesquisa dos promoções retorna um array', async () => {
    const sale = await service.getAll();
    expect(sale).to.be.a('array');
  })
});

describe('/products/:id (getById)', () => {
  describe('A pesquisa pelo ID será/terá', () => {
    before(() => sinon.stub(model, 'getById').resolves({
      date: '2022-07-06 03:43:27', productId: 2, quantity: 10,
    }));
    after(() => model.getById.restore());

    it('um objeto', async () => {
      const sale = await service.getById(1);
      expect(sale).to.be.a('object');
    })
  })

  describe('Ao realizar um pesquisa com um ID que não existe', () => {
    before(() => sinon.stub(service, 'getById').resolves(null));
    after(() => service.getById.restore());

    it('etorno esperado e NULL', async () => {
      const sale = await service.getById(10);
      expect(sale).to.equal(null);
    })
  })
});
