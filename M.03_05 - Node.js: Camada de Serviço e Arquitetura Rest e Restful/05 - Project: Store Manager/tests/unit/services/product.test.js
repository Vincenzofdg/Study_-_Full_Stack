const { expect } = require('chai');
const sinon = require('sinon');

const service = require('../../../services/productsService');
const model = require('../../../models/productsModel');

describe('/products (getAll)', () => {
  it('Pesquisa dos produtos retorna um array', async () => {
    const products = await service.getAll();
    expect(products).to.be.a('array');
  });
});

describe('/products/:id (findById)', () => {
  describe('A pesquisa pelo ID será/terá', () => {
    before(() => sinon.stub(model, 'findById').resolves({ id: 1, name: 'Name' }));
    after(() => model.findById.restore());

    it('um objeto', async () => {
      const product = await service.findById(1);
      expect(product).to.be.a('object');
    })

    it('um id e um name', async () => {
      const product = await service.findById(1);
      expect(product).to.include.all.keys('id', 'name');
    })
  })

  describe('Ao realizar um pesquisa com um ID que não existe', () => {
    before(() => sinon.stub(service, 'findById').resolves(null));
    after(() => service.findById.restore());

    it('retorno esperado e NULL', async () => {
      const response = await service.findById(10);
      expect(response).to.equal(null);
    })
  })
});

describe('/products (create)', () => {
  it('realiza com sucesso a criação de um novo produto', async () => {
    const product = await service.create('Um novo Produto');
    expect(product).to.be.a('object');
  })

  it('terá um id e um name', async () => {
    const product = await service.create('Um novo Produto');
    expect(product).to.include.all.keys('id', 'name');
  })
});

describe('/products (update)', () => {
  describe('caso tente atualizar um ID que não existe', () => {
    before(() => sinon.stub(model, 'findById').resolves(null));
    after(() => model.findById.restore());

    it('sera nulo', async () => {
      const product = await service.update('Um Produto qualquer', 10);
      expect(product).to.be.null;
    })
  })

  describe('caso tente autalizar um ID que existe', () => {
    before(() => sinon.stub(model, 'findById').resolves({ id: 1, name: 'Um Produto qualquer' }));
    after(() => model.findById.restore());

    it('o objeto será atualizado', async () => {
      const product = await service.update('Um Produto qualquer', 1);
      expect(product).to.be.a('object');
    })
  })
});

describe('/products (remove)', () => {
  describe('caso tente remover um ID que não existe', () => {
    before(() => sinon.stub(model, 'findById').resolves(null));
    after(() => model.findById.restore());

    it('sera nulo', async () => {
      const product = await service.remove(10);
      expect(product).to.be.null;
    })
  })

  describe('caso tente remover um ID que existe', () => {
    before(() => sinon.stub(model, 'findById').resolves(true));
    after(() => model.findById.restore());

    it('o objeto será removido', async () => {
      const product = await service.remove(1);
      expect(product).to.be.true;
    })
  })
})