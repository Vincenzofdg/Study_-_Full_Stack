const { expect } = require('chai');
const characterModel = require('../models/character');

describe('listar todos os personages', () => {
  it('o resultado é um array', async () => {
    const characters = await characterModel.getAll();
    expect(characters).to.be.an('array');
  });
  it('o resultado é um array de personagens', async () => {
    const characters = await characterModel.getAll();
    expect(characters[0]).to.have.keys(['id', 'name', 'cartoon']);
  });
});
