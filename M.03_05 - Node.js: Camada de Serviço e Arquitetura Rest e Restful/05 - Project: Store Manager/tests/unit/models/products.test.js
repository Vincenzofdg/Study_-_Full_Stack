const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection');
const model = require('../../../models/productsModel');

describe('/products (getAll)', () => {
  const products = [
    { id: 1, name: 'Martelo de Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' },
  ];

  before(async () => sinon.stub(connection, 'execute').resolves(products));
  after(async () => connection.execute.restore());
  
  describe('Retorna todos os produtos esperados', () => {
    before(async () => sinon.stub(model, 'getAll').resolves(products));
    after(async () => model.getAll.restore());

    it('Retorna os produtos em um array', async () => {
      const product = await model.getAll();
      expect(product).to.be.a('array');
    });

    it('Lista de todos os produtos', async () => {
      const product = await model.getAll();
      expect(product).to.equal(products);
    });
  });
});

describe('/products/:id (findById)', () => {
  before(async () => sinon.stub(connection, 'execute').resolves([[]]));
  after(async () => connection.execute.restore());
  
  describe('Realizando a busca pelo ID', () => {
    before(async () => sinon.stub(model, 'findById').resolves({ id: 1, name: 'Martelo de Thor' }));
    after(async () => model.findById.restore());

    it('Retorna o produto com o ID especifico', async () => {
      const product = await model.findById(1);
      expect(product).to.be.a('object');
    });

    it('Produto retornado tem as propriedades esperadas', async () => {
      const product = await model.findById(2);
      expect(product).to.include.all.keys('id', 'name');
    });
  });

  describe('Se pesquisar por um ID inexistente retorna NULL', () => {
    it('id = -1', async () => {
      const product = await model.findById(-1);
      expect(product).to.equal(null);
    });

    it('id = 10', async () => {
      const product = await model.findById(10);
      expect(product).to.equal(null);
    });

    it('id = 20', async () => {
      const product = await model.findById(20);
      expect(product).to.equal(null);
    });
  });
});

describe('/products (create)', () => {
  const product = { name: 'Um novo Produto' };

  it('Produto adicionado é um objeto', async () => {
    const newProduct = await model.create(product);
    expect(newProduct).to.be.a('object');
  });

  it('Produto criado deve ter um Id', async () => {
    const newProduct = await model.create(product);
    expect(newProduct).to.have.a.property('id');
  });
});

describe('/products (update)', () => {
  it('Produto atualizado é um objeto', async () => {
    const product = await model.update('Um novo Produto', 4);
    expect(product).to.be.a('object');
  });

  it('Produto atualizado deve ter o Id correto', async () => {
    const product = await model.create('Um novo Produto', 4);
    expect(product).to.have.a.property('id');
  });
});

describe('/products (remove)', () => {
  it('Produto será deletado', async () => {
    const product = await model.remove(4);
    expect(product).to.be.true;
  });
});