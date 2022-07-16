const { expect } = require('chai');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const userController = require('../../src/controllers/userController');
const userService = require('../../src/services/userService');

chai.use(chaiAsPromised);

describe('controllers/userController', () => {
  beforeEach(sinon.restore);

  describe('edit', () => {
    it('deve disparar um erro caso os parametros sejam invalidos', () => {
      sinon.stub(userService, 'validateParamsId').rejects();
      sinon.stub(userService, 'validateBodyEdit').resolves();
      chai.expect(userController.edit({}, {}))
        .to.eventually.be.rejected;
    });

    it('deve disparar um erro caso o body seja invalido', () => {
      sinon.stub(userService, 'validateParamsId').resolves();
      sinon.stub(userService, 'validateBodyEdit').rejects();
      chai.expect(userController.edit({}, {}))
        .to.eventually.be.rejected;
    });

    it('deve disparar um erro caso o método checkNotExists dispare um erro', () => {
      sinon.stub(userService, 'validateParamsId').resolves({});
      sinon.stub(userService, 'validateBodyEdit').resolves();
      sinon.stub(userService, 'checkNotExists').rejects();
      chai.expect(userController.edit({}, {}))
        .to.eventually.be.rejected;
    });

    it('deve disparar um erro caso o método checkEmailExists dispare um erro', () => {
      sinon.stub(userService, 'validateParamsId').resolves({});
      sinon.stub(userService, 'validateBodyEdit').resolves({ email: 'a@a.com' });
      sinon.stub(userService, 'checkNotExists').resolves();
      sinon.stub(userService, 'checkEmailExists').rejects();
      chai.expect(userController.edit({}, {}))
        .to.eventually.be.rejected;
    });

    it('deve chamar o método edit se o método checkEmailExists não disparar erros', async () => {
      sinon.stub(userService, 'validateParamsId').resolves({});
      sinon.stub(userService, 'validateBodyEdit').resolves({ email: 'a@a.com' });
      sinon.stub(userService, 'checkNotExists').resolves();
      const checkEmailExistsStub = sinon
        .stub(userService, 'checkEmailExists')
        .resolves();
      sinon.stub(userService, 'edit').resolves();
      try {
        await userController.edit({}, {});
      } catch (error) { /**/ }
      expect(checkEmailExistsStub.getCall(0)).to.be.ok;
    });
  });
});