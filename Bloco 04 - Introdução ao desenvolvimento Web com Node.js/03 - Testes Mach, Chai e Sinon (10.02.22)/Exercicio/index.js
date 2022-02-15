const { writeFileSync } = require('fs');

const numberCheck = (param) => {
  if (typeof param != 'number') return 'parâmetro invalido'
  else {
    typeof param != 'number' && 'Invalido'
    if (param > 0) return 'positivo';
    else if (param < 0) return 'negativo';
    else return 'neutro';
  };
};

const fileWritter = (file, content) => {
  writeFileSync(`${__dirname}/${file}`, content);
  return 'ok';
}

module.exports = {
  numberCheck,
  fileWritter
}