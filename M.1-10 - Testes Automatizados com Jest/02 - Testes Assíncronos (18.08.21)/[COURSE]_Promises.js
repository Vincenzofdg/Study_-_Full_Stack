const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject(new Error('Não possui esse tipo de animal.'));
    }, 100);
  })
);

/* Testes: 
01° Crie o Describe;
02° Adicionarmos o .then para pegar o seu resultado;
03° Agora adicione os testes e os execute;
04° Verifique falsos positivos mudando o resultado.*/

// Continua dando falso positivo:
describe('Quando o tipo do animal, existe (Com falso Positivo)', () => {
  test('Retorne a lista de animais', () => {
    findAnimalsByType('Dog').then((listDogs) => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

// Resolvendo:
// Mudando as chaves para parênteses nas linhas indicadas.
describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => ( // <===
    findAnimalsByType('Dog').then((listDogs) => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    })
  )); // <===
});

// Testando o erro:
// Só Testando se a função retorna o reject
describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a lista de animais', () => (
    findAnimalsByType('Lion').catch((error) => (
      expect(error.message).toMatch('Não possui esse tipo de animal.')
    ))
  ));
});

// Função expect.assertions(1) garante apenas 1 retorna do resolve
describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(1);
    return findAnimalsByType('Lion').catch((error) => (
      expect(error.message).toMatch('Não possui esse tipo de animal.')
    ));
  });
});