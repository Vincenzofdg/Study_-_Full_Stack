const pokeTips = (callback) => {
  setTimeout(() => {
    callback('Charmander é o melhor pokémon para começar.');
  }, 1000);
};

module.exports = pokeTips;