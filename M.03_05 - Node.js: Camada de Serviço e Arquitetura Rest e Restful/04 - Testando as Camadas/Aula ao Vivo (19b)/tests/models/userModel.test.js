const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');
const userModel = require('../../src/models/userModel');
const db = require('../../src/models/db');

chai.use(chaiAsPromised);

describe('models/userModel', () => {
  beforeEach(sinon.restore);

  describe('exists', () => {
    it('deve disparar um erro caso o mysql dê pau', () => {
      sinon.stub(db, 'query').rejects();
      chai.expect(userModel.exists(1)).to.eventually.be.rejected;
    });

    it('deve disparar um erro caso o mysql não retorne uma lista', () => {
      sinon.stub(db, 'query').resolves([{ insertId: 1 }]);
      chai.expect(userModel.exists(1)).to.eventually.be.rejected;
    });

    it('deve retornar false se não encontrar o item', () => {
      sinon.stub(db, 'query').resolves([[]]);
      chai.expect(userModel.exists(1)).to.eventually.be.false;
    });

    it('deve retornar true se encontrar o item', () => {
      sinon.stub(db, 'query').resolves([[{}]]);
      chai.expect(userModel.exists(1)).to.eventually.be.true;
    });
  });
});