const cepModel = require('../models/cepModel');

const VALIDATION = /\d{5}-?\d{3}/; // XXXXX-XXX

const validateCEP = async (myCEP) => {
  // Valida o formato do CEP (55555-333)
  if (!VALIDATION.test(myCEP)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }
    
  // Verifica se o CEP encontra-se no banco de dados
  // o banco so aceita o CEP 12345-123 como 12345123
  let separa = myCEP.split('-')
  let junta = separa.join('');
  const cepFounded = await cepModel.findByCEP(junta); // Buscamos o CEP no banco de dados

  if (cepFounded.length === 0) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }

  // Caso esteja escrito certo e o CEP exista...
  return cepFounded;
};

module.exports = {
    validateCEP,
}