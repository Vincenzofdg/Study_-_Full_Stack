const fs = require('fs')
const { stub } = require('sinon');
const { expect } = require('chai');
const { fileWritter } = require('../index.js');

before(() => stub(fs, 'writeFileSync'));
after(() => fs.writeFileSync.restore());

describe('Função fileWritter', () => {
  it('Verifica é uma função', () => {
    expect(fileWritter).to.be.a('function');
  });
  it('Verifica se os parâmetros são strings', () => {
    const toBeTested = fileWritter('file.txt', 'content')
    expect(toBeTested).to.be.a('string');
  });
  it('Retorna a strings "ok"', () => {
    const toBeTested = fileWritter('file.txt', 'content')
    expect(toBeTested).to.be.equals('ok');
  });
});
