const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const ConflitError = require('../../src/errors/ConflitError');
const NotFoundError = require('../../src/errors/NotFoundError');
const userModel = require('../../src/models/userModel');
const userService = require('../../src/services/userService');

chai.use(chaiAsPromised);

describe('services/userService', () => {
  beforeEach(sinon.restore);

  describe('listWithoutPassword', () => {
    it('deve disparar um erro caso o model dispare um erro', () => {
      sinon.stub(userModel, 'list').rejects();
      /*
      try {
        await userService.listWithoutPassword();
      } catch (error) {
        chai.expect(error).to.be.instanceOf(Error);
      }
      */
      chai.expect(userService.listWithoutPassword())
        .to.eventually.be.rejected;
    });

    it('deve disparar um erro caso o model não retorne uma lista', () => {
      sinon.stub(userModel, 'list').resolves({});
      chai.expect(userService.listWithoutPassword())
        .to.eventually.be.rejected;
    });

    it('deve retornar uma lista de items com "id", "name", e "email"', async () => {
      const items = [{ id: 1, name: 'teste', email: 'a@a.com' }];
      sinon.stub(userModel, 'list').resolves(items);
      const result = await userService.listWithoutPassword();
      // chai.expect(result).to.be.instanceOf(Array); // desnecessário
      // chai.expect(result[0]).to.be.instanceOf(Object); // desnecessário
      // chai.expect(result.id).to.equal(1); // bom
      // chai.expect(result.name).to.equal('teste'); // bom
      // chai.expect(result.email).to.equal('a@a.com'); // bom
      chai.expect(result).to.deep.equal([{
        id: 1,
        name: 'teste',
        email: 'a@a.com',
      }]); // excelente
    });
  });

  describe('checkNotExists', () => {
    it('deve disparar um erro se o model der pau', () => {
      sinon.stub(userModel, 'exists').rejects();
      chai.expect(userService.checkNotExists(0))
        .to.eventually.be.rejected;
    });

    it('deve disparar um erro NotFoundError se o model responder false', () => {
      sinon.stub(userModel, 'exists').resolves(false);
      chai.expect(userService.checkNotExists(0))
        .to.eventually.be.rejectedWith(NotFoundError);
    });

    it('deve resolver sem problemas se o model responder true', () => {
      sinon.stub(userModel, 'exists').resolves(true);
      chai.expect(userService.checkNotExists(0))
        .to.eventually.be.undefined;
    });
  });

  describe('checkEmailExists', () => {
    it('deve disparar um erro se o model der pau', () => {
      sinon.stub(userModel, 'existsByEmail').rejects();
      chai.expect(userService.checkEmailExists(0))
        .to.eventually.be.rejected;
    });

    it('deve disparar um erro ConflitError se o model responder true', () => {
      sinon.stub(userModel, 'existsByEmail').resolves(true);
      chai.expect(userService.checkEmailExists(0))
        .to.eventually.be.rejectedWith(ConflitError);
    });

    it('deve resolver sem problemas se o model responder false', () => {
      sinon.stub(userModel, 'existsByEmail').resolves(false);
      chai.expect(userService.checkEmailExists(0))
        .to.eventually.be.undefined;
    });
  });

  describe('edit', () => {
    it('deve disparar um erro caso o model dê pau', () => {
      sinon.stub(userModel, 'edit').rejects();
      chai.expect(userService.edit(0, {}))
        .to.eventually.be.rejected;
    });

    it('deve retornar se estiver ok', () => {
      sinon.stub(userModel, 'edit').resolves();
      chai.expect(userService.edit(0, {}))
        .to.eventually.be.undefined;
    });
  });

  describe('getWithoutPassword', () => {
    it('deve disparar um erro caso o model dispare um erro', () => {
      sinon.stub(userModel, 'get').rejects();
      chai.expect(userService.getWithoutPassword(0))
        .to.eventually.be.rejected;
    });

    it('deve disparar um erro caso o model não retorne uma lista', () => {
      // sinon.stub(userModel, 'get').resolves(undefined);
      sinon.stub(userModel, 'get').resolves();
      chai.expect(userService.getWithoutPassword(0))
        .to.eventually.be.rejected;
    });

    it('deve retornar uma lista de items com "id", "name", e "email"', async () => {
      const items = { id: 1, name: 'teste', email: 'a@a.com' };
      sinon.stub(userModel, 'get').resolves(items);
      const result = await userService.getWithoutPassword();
      chai.expect(result).to.deep.equal({
        id: 1,
        name: 'teste',
        email: 'a@a.com',
      });
    });
  });
});