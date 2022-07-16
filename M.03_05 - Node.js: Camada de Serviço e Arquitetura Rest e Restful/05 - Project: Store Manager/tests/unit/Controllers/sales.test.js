const sinon = require('sinon');
const { expect } = require('chai');

const controller = require('../../../controllers/salesController');
const service = require('../../../services/salesService');

describe('Testando função getAll', () => {
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
      ]
    );
  });

  after(() => service.getAll.restore());

  it('Solicitação do controller retorna o status 200 (OK)', async () => {
    await controller.getAll(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
  })
});

describe('Testando a função getById', () => {
  // describe('Se o id existir', () => {
  //   const req = {};
  //   const res = {};

  //   before(() => {
  //     res.params = { id: 1 }

  //     req.status = sinon.stub().returns(req);
  //     req.json = sinon.stub().returns();
  //     sinon.stub(service, 'getById').resolves({ id: 1, name: 'Martelo do Thor' });
  //   })

  //   after(() => service.getById.restore());

  //   it('Retorna código 200', async () => {
  //     await service.getById(res, req);
  //     expect(req.status.calledWith(200)).to.be.equal(true);;
  //   })
  // })

  describe('Se o id não existir', () => {
    const res = {};
    const req = {};

    before(() => {
      req.params = { id: 100 }

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(service, 'getById').resolves(null);
    })

    after(() => service.getById.restore());

    it('Retorna código 404', async () => {
      await controller.getById(req, res);
      expect(res.status.calledWith(404)).to.be.equal(true);
    })
  })
});
