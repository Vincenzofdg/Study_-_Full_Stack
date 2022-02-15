const removeBebidas = require('./removeSabor');
const numeros = require('./removeSabor');

beforeEach(() => array = ['agua', 'cerveja', 'vinho', 'guarana', 'garapa']);

describe('Remove sabor de bebida', () => {
  it('Remove Água', () => {
    expect(removeBebidas(array, 'agua')).toEqual(['cerveja', 'vinho', 'guarana', 'garapa']);
  });
  it('Remove Garapa', () => {
    expect(removeBebidas(array, 'garapa')).toEqual(['agua', 'cerveja', 'vinho', 'guarana']);
  });
  it('Remove Groselha (Caso exista)', () => {
    expect(removeBebidas(array, 'groselha')).not.toContain('groselha');
  });
});