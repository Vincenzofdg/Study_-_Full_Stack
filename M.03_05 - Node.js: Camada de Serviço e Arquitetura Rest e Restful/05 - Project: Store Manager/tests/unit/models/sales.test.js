const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection');
const model = require('../../../models/salesModel');

describe('/sales (getAll)', () => {
  const sales = [
    { saleId: 1, date: '2022 - 07 - 06T02: 16: 11.000Z', productId: 1, quantity: 5 },
    { saleId: 1, date: '2022 - 07 - 06T02: 16: 11.000Z', productId: 2, quantity: 10 },
    { saleId: 2, date: '2022 - 07 - 06T02: 16: 11.000Z', productId: 3, quantity: 15 },
  ];

  before(async () => sinon.stub(connection, 'execute').resolves(sales));
  after(async () => connection.execute.restore());
  
  describe('Retorna todas as promoções esperadas', () => {
    before(async () => sinon.stub(model, 'getAll').resolves(sales));
    after(async () => model.getAll.restore());

    it('Retorna as promoções em um array', async () => {
      const sale = await model.getAll();
      expect(sale).to.equal(sales);
    });
    
    it('Lista de todas as promoções', async () => {
      const sale = await model.getAll();
      expect(sale).to.be.a('array');
    });
  });
});

describe('/sales/:id (getById)', () => {
  before(async () => sinon.stub(connection, 'execute').resolves([[]]));
  after(async () => connection.execute.restore());
  
  describe('Realizando a busca pelo ID', () => {
    before(async () => sinon.stub(model, 'getById').resolves(
      { saleId: 2, date: '2022 - 07 - 06T02: 16: 11.000Z', productId: 3, quantity: 15 }
    ));
    after(async () => model.getById.restore());

    it('Retorna o promoção com o ID especifico', async () => {
      const sale = await model.getById(2);
      expect(sale).to.be.a('object');
    });

    it('Promoção encontrada nao pode ser vazia', async () => {
      const sale = await model.getById(2);
      expect(sale).to.be.not.empty;
    });
  });

  describe('Se pesquisar por um ID inexistente retorna NULL', () => {
    it('id = -1', async () => {
      const sale = await model.getById(-1);
      expect(sale).to.equal(null);
    });

    it('id = 10', async () => {
      const sale = await model.getById(10);
      expect(sale).to.equal(null);
    });

    it('id = 20', async () => {
      const sale = await model.getById(20);
      expect(sale).to.equal(null);
    });
  });
});

describe('/sales (remove)', () => {
  it('Promoção será deletada', async () => {
    const sale = await model.remove(4);
    expect(sale).to.be.true;
  });
});