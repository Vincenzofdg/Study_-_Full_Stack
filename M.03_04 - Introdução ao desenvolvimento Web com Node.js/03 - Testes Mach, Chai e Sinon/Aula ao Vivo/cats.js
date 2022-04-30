const axios = require('axios');

const catFacts = async (numFacts) => {
  if (typeof numFacts !== 'number') throw Error('input invalido');
  
  const results = [];
  try {
    for (let i = 0; i < numFacts; i++) {
      let factResponse = await axios.get('https://catfact.ninja/fact');
      results.push(factResponse.data.fact);
    }
  
    return results;
  } catch (e) {
    return [];
  }
}

module.exports = catFacts;