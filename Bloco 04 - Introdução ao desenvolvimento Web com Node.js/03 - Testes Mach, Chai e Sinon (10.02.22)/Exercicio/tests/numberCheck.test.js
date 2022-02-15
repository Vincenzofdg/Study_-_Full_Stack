const { expect } = require('chai');

const { numberCheck } = require('../index.js');

describe('Função numberCheck', () => {
  it('Verifica é uma função', () => {
    expect(numberCheck).to.be.a('function')
  });
  it('Verifica se o retorno é uma String', () => {
    expect(numberCheck(1)).to.be.a('string')
  });
  it('Verifica se o número é positivo', () => {
    expect(numberCheck(1)).to.be.equals('positivo');
  });
  it('Verifica se o número é negativo', () => {
    expect(numberCheck(-1)).to.be.equals('negativo');
  });
  it('Verifica se o número é neutro', () => {
    expect(numberCheck(0)).to.be.equals('neutro');
  });
  it('O parâmetro deve ser um número', () => {
    expect(numberCheck('string')).to.be.equals('parâmetro invalido');
  });
});
