// Com o Mocha:
describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    //
  });
});

// Usaremos a interface expect do chai em nossos exemplos:
const resposta = calculaSituacao(4);

expect(resposta).equals('reprovado');

// Mocha + Chai
const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).equals('reprovado');
  });
});

// ou

const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  });
});
