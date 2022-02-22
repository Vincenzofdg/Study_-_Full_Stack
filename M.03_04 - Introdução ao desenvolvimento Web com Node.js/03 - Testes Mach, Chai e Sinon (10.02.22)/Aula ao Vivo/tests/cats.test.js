const { expect, assert } = require('chai');
const sinon = require('sinon');
const axios = require('axios');
const cats = require('../cats');

describe('executa a função que gera N fatos sobre gatos', () => {
  it('a função existe', () => {
    expect(cats).to.be.a('function');
  });

  describe('quando N não é um número', () => {
    it(`é lançado um erro com a mensagem 'input invalido'`, async () => {
      try {
        await cats({})
        assert(false);
      } catch (e) {
        assert(true, 'input invalido');
      }
    });
  });

  describe('quando N === 0', () => {
    it('retorna um array vazio', async () => {
      const facts = await cats(0);

      expect(facts).to.be.an('array');
      expect(facts).to.have.length(0);
    });
  });

  describe('quando N > 0', () => {
    beforeEach(() => {
      sinon.stub(axios, 'get').resolves({
          data: {
            fact: `The technical term for a cat's hairball is a “bezoar.”`,
            length: 54,
          },
      });
    });

    afterEach(() => {
      axios.get.restore();
    });

    it('retorna um array de tamanho N', async () => {
      const facts = await cats(5);

      expect(facts).to.be.an('array');
      expect(facts).to.have.length(5);
    });

    it('retorna um array de strings', async () => {
      const facts = await cats(5);

      expect(facts).to.be.an('array');
      facts.forEach(
        fact => expect(fact).to.be.a('string')
      );
    });

    it('retorna fatos sobre gatos', async () => {
      const facts = await cats(5);

      expect(facts).to.be.an('array');
      facts.forEach(
        fact => expect(fact.length).to.be.greaterThan(0)
      );
    });

    it('faz N requisições', async () => {
      const facts = await cats(5);

      expect(axios.get.callCount).to.be.equal(5);
    });

  })

  describe('houve problema na chamada da API externa', () => {
    before(() => {
      sinon.stub(axios, 'get').rejects('falha na API');
    });

    after(() => {
      axios.get.restore();
    });

    it('um array vazio é retornado', async () => {
      const facts = await cats(1);

      expect(facts).to.be.an('array');
      expect(facts).to.have.length(0);
    });
  });
});