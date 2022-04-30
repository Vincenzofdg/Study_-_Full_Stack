const cepModel = require('../models/cepModel');

const VALIDATION = /\d{5}-?\d{3}/; // XXXXX-XXX

const validateSearch = async (param) => {
  const myCEP = param.replace(/-/ig, '');
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
  const cepFounded = await cepModel.findByCEP(myCEP); // Buscamos o CEP no banco de dados

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

// -------------------------------------------------------------

const validateAdd = async (param) => {
  const myCEP = param.replace(/-/ig, '');
  if (!VALIDATION.test(myCEP)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }

  const search = await cepModel.findByCEP(myCEP);

  if (search.length !== 0) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente'
      },
    };
  }

  return myCEP;
}

module.exports = {
    validateSearch,
    validateAdd,
}