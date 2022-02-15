const data = require('./data');

function getSpeciesByIds(...ids) { // recebe um numero variável de argumento
  return data.species.filter((animal) => ids.includes(animal.id));
}

function getAnimalsOlderThan(animal, age) {
  const subject = data.species.find((animalKind) => animalKind.name === animal);
  return subject.residents.every((bicho) => bicho.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const filtro = (nome) => nome.firstName === employeeName || nome.lastName === employeeName;
  return data.employees.find(filtro);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return data.employees.some((info) => info.managers.includes(id));
}

function addEmployee(id = '', firstName = '', lastName = '', managers = [], responsibleFor = []) {
  const person = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(person);
}

function countAnimals(species) {
  if (!species) {
    const formatando = (acc, elemento) => {
      acc[elemento.name] = elemento.residents.length;
      return acc;
    };
    return data.species.reduce(formatando, {});
  }
  const located = data.species.find((animal) => animal.name === species);
  return located.residents.length;
}

function calculateEntry({ Adult = 0, Senior = 0, Child = 0 } = 0) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters
  const money = data.prices;
  return (Adult * money.Adult + Senior * money.Senior + Child * money.Child);
}

function getAnimalMap(options) {
  // const loc = { NE: [], NW: [], SE: [], SW: [] };
  // if (!options || !options.includeNames) {
  //   data.species.forEach((spc) => loc[spc.location].push(spc.name));
  //   return loc;
  // }
  // data.species.forEach((spc) => loc[spc.location].push({ [spc.name]: spc.residents
  //   .filter((resident)=> (!options.sex || (resident.sex === options.sex)))
  //   .sort(options.sorted ? (a, b) => a.name.localeCompare(b.name) : () => 0)
  //   .map((resident) => resident.name) }));
  //   return loc;
}

function getSchedule(dayName) {
  const cronograma = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  return ((!dayName) ? (cronograma) : ({ [dayName]: cronograma[dayName] }));
}

function getOldestFromFirstSpecies(id) {
  const whoIs = data.employees.find((person) => person.id === id);
  const firstKind = whoIs.responsibleFor[0];
  const kind = data.species.find((animal) => firstKind.includes(animal.id));
  const older = kind.residents.sort((x, y) => y.age - x.age);
  return older.map((item) => Object.values(item))[0];
}

function increasePrices(percentage) {
  // Me envergonho desta solução, com mais tempo eu ireia arruma-la
  const price = data.prices;
  price.Adult = Math.ceil(100 * price.Adult * (1 + percentage / 100)) / 100;
  price.Senior = Math.ceil(100 * price.Senior * (1 + percentage / 100)) / 100;
  price.Child = Math.ceil(100 * price.Child * (1 + percentage / 100)) / 100;
  return data.prices;
  // return Object.keys(data.prices).forEach((key) => {
  //   data.prices[key] = Math.ceil(data.prices[key] * (percentage + 100)) / 100;
}

function getEmployeeCoverage(idOrName) {
  // const myCoverage = employee => ({ [`${employee.firstName} ${employee.lastName}`]:
  // employee.responsibleFor.map((id) => data.species.find((specie) => specie.id === id).name) });
  // const myCoverage = (employee) => ({
  //   [`${employee.firstName} ${employee.lastName}`]:
  //     employee.responsibleFor.map((id) => data.species.find((specie) => specie.id === id).name) });
  // if (!idOrName) {
  //   return data.employees.reduce((animais, employee) => Object.assign(animais, myCoverage(employee)), {});
  //   return data.employees.reduce((animais, employee) =>
  //     Object.assign(animais, myCoverage(employee)), {});
  // }
  // return myCoverage(data.employees.find((info) => info.id === idOrName) || data.employees.filter((item) => Object.values(item).includes(idOrName))[0]);
  // return myCoverage(data.employees.find((info) => info.id === idOrName)
  //   || data.employees.filter((i) => Object.values(i).includes(idOrName))[0]);
}

console.log(getEmployeeCoverage());

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
