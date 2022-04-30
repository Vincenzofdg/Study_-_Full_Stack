const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    
    // ESCREVA SEUS TESTES ABAIXO:
    assert.strictEqual(typeof productDetails, 'function');
    assert.strictEqual(Object.keys(productDetails('arroz', 'feijão')).length, 2);
    assert.strictEqual(typeof Object.keys(productDetails), 'object');
    assert.notDeepStrictEqual(productDetails('arroz', 'feijão')[0], productDetails('arroz', 'feijão')[1]);
    assert.strictEqual(productDetails('arroz', 'feijão')[0].details.productId.slice(-3), '123');
    assert.strictEqual(productDetails('arroz', 'feijão')[1].details.productId.slice(-3), '123');
  });
});
