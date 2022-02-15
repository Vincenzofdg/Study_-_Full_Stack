const removeBebidas = (array, remover) => {
  array.splice(array.indexOf(remover), 1);
  return array;
};

module.exports = removeBebidas;