const sinon = require('sinon');
const { expect } = require('chai');

const controller = require('../../../controllers/productsController');
const service = require('../../../services/productsService');

describe('Testando a função getAll', () => {
  const res = {};
  const req = {};

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(service, 'getAll').resolves(
      [
        { id: 1, name: 'Martelo de Thor' },
        { id: 2, name: 'Traje de encolhimento' },
        { id: 3, name: 'Escudo do Capitão América' },
      ]);
  })

  after(() => service.getAll.restore());

  it('Solicitação do controller retorna o status 200 (OK)', async () => {
    await controller.getAll(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
  })
})

describe('Testando a função getById', () => {
  describe('Se o id existir', () => {

    const res = {};
    const req = {};

    before(() => {
      req.params = { id: 1 }

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(service, 'findById').resolves({ id: 1, name: 'Martelo do Thor' });
    })

    after(() => service.findById.restore());

    it('Retorna código 200', async () => {
      await controller.getById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);;
    })
  })

  describe('Se o id não existir', () => {

    const res = {};
    const req = {};

    before(() => {
      req.params = { id: 100 };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(service, 'findById').resolves(null);
    })

    after(() => service.findById.restore());

    it('Retorna código 404', async () => {
      await controller.getById(req, res);
      expect(res.status.calledWith(404)).to.be.equal(true);
    })
  })
})

describe('Ao chamar o controller de create', () => {
  describe('Se tiver sucesso', () => {
    const res = {};
    const req = {};

    before(() => {
      req.body = { name: 'Produto 1' };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(service, 'create').resolves({ id: 4, name: 'Produto 1' });
    })

    after(() => service.create.restore());

    it('Retorna código 201', async () => {
      await controller.create(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    })
  })
})

describe('Ao chamar o controller de remove', () => {
  describe('Se tiver sucesso', () => {
    const res = {};
    const req = {};

    before(() => {
      req.params = { id: 1 }

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(service, 'remove').resolves();
    })

    after(() => service.remove.restore());

    it('Retorna código 204', async () => {
      await controller.removeProduct(req, res);
      expect(res.status.calledWith(204)).to.be.equal(false);
    })
  })
})