const peopleModel = require('../models/peopleModel');

const update = async (id, name, age) => {
  const numberId = Number(id);
  const updatedPerson = await peopleModel.update(numberId, name, age);
  console.log(updatedPerson)
  
  if (!updatedPerson.affectedRows) return null;
  return { id, name, age, numberId};
};

module.exports = {
  update
};
